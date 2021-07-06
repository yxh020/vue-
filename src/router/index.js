import Vue from 'vue'
import VueRouter from 'vue-router'
//工程化
//require.context('路径',布尔值(true表示查找同级文件的子级),正则)  ：解决import
let routerList = []
function importAll(r) {
    //console.log(r.keys());
    r.keys().forEach( i => {
        routerList.push(r(i).default)
    })
}
importAll(require.context('./',true,/\.router\.js/))

Vue.use(VueRouter)
const routes = [
    ...routerList
]

const router = new VueRouter({
    routes
})
export default router