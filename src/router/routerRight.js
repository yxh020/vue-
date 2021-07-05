//路由权限(页面)
import router from './index'

function getToken() {
    return sessionStorage.getItem('token')
}

router.beforeEach((to,from,next) =>{
    if(!getToken()){//没有登录
        if(to.meta.token){
            next({
                path:'/login'
            })
        }else{
            next()
        }
    }else{//登录
        next()
    }
})