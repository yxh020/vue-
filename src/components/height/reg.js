//注册全局组件
 //注册插件  Vue.use()  install
export default {
    install(Vue){ //Vue构造函数
        //console.log(Vue) //Vue.component
        let allCom = require.context('./',false,/\.vue$/)
        //console.log(allCom.keys())
        allCom.keys().forEach( i =>{
            Vue.component(i.replace(/\.\//,'').replace(/\.vue$/,''),allCom(i).default)
        })
    }
}