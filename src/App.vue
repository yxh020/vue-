<template>
  <div>
    <h1>App页面</h1>
    <button @click='logins'>登录</button>
    <add></add>
    <router-link to="/login">Login</router-link>
    <router-link to="/home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {login} from '../src/request/api/login'
export default {
  data(){
    return{}
  },
  methods:{
    logins(){
      // login({}).then(res=>{
      //   console.log(res)
      // })
      
    }
  }
}
</script>

<style>
   
</style>