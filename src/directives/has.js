export default {
    inserted(el,binding,vnode){
        console.log(el,binding,vnode)
        let value = binding.value
        let boolean = vnode.context.$store.state.but[value]
        if(!boolean){//删除元素
            el.parentNode.removeChild(el)
        }
    }
}
