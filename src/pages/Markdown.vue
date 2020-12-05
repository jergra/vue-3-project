<template>
  <div class="flex flex-wrap w-full">
      <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
      <section class="flex m-auto w-10/12 h-screen">
        <article class="w-1/2 border">
            <textarea class="w-full h-full" :value="text" @input="update" ref="inputRef"></textarea>
        </article>
        <article class="w-1/2 border bg-gray-100" v-html="markedText"></article>
      </section>
  </div>
</template>

<script>
import marked from "marked"
import useDebounce from "../utilities/composition/useDebounce"
//import { onMounted, ref } from "vue";
//import useDebounce from "../utilities/composition/useDebounce"
export default {
    
  // setup() {
  //   const inputRef = ref("");
  //   onMounted(() => {
  //     inputRef.value.focus();
  //   })
  //   return {inputRef}
  // },
  mounted() {
    this.debounce = useDebounce()
    this.$refs.inputRef.focus()
  },
  data(){
      return {
          text: "",
          debounce: ""
      }
  },
  computed: {
      markedText(){
          return marked(this.text)
      }
  },
  methods: {
    update(event){
      const task = () => (this.text = event.target.value)
      this.debounce(task, 500)
    },
  }
};
</script>

<style></style>