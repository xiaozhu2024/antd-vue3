import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AButton',
  props: {},
  setup() {
    return () => {
      return <button>按钮</button>
    }
  },
})
