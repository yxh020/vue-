<template>
  <div>
      <h1>power组件</h1> 
        <button v-has='add'>添加</button>
        <button v-has='deletes'>删除</button>
  </div>
</template>

<script>
import has from '@/directives/has.js'
export default {
    data(){
        return{
            add:'add',
            deletes:'delete'
        }
    },
    methods:{

    },
    directives:{
        has
    }
}
</script>

<style>

</style>