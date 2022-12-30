import  { defineComponent } from "vue";

export default defineComponent({
    name:"AButton",
    props:{},
    setup(props,context){
        return () =>{
            return <button>按钮</button>
        }
    }
})
