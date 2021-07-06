import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({//定义按钮的权限
    state:{
        but:{
            add:true,
            delete:false
        }
    }
})
export default store