import axios from 'axios'

//token
function getToken(){
    return sessionStorage.getItem('token')
}

//创建axios实例
let service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/a1267a408643cd63297d5cc0f97bf911/base',
    timeout: 5000
})

service.interceptors.request.use(
    config =>{
        if(getToken()){
            config.headers['token'] = getToken()
        }
        return config
    },
    err =>{
        return Promise.reject(err)
    }
)

service.interceptors.response.use(
    response =>{
        let res = response.data
        if(res.code === '401') location.href = '/login'
        return Promise.resolve(res)
    },
    err => {
        return Promise.reject(err)
    }
)
export default service