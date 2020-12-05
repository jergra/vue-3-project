<template>
    <div class="flex flex-wrap w-full relative">
        <div class="absolute w-full" v-for="(color, index) in slides" 
            :key="color">
            <transition name="fade">
            <div
                v-if="currentSlide == index"
                :class="color" 
                style="height: 350px;">
            </div>
            </transition>
        </div>
        <div class="w-full bg-green-400 bg-yellow-200 bg-red-800 " style="height: 340px;">
            <div class="absolute bottom-0 w-full flex justify-center">
                <div v-for="(slide, index) in slides" 
                    :key="slide" 
                    @click="makeActive(index)"
                    :class="currentSlide == index ? 'bg-gray-700':'bg-gray-300'"
                    class="mx-4 w-20 h-20 rounded-full cursor-pointer shadow-xl">

                </div>
            </div>
        </div>
        <!-- <div class="my-10 flex w-full">
            <div class="m-auto">
                <transition name="fade">
                <h1 v-if="isTitleShowing">Slider Carousel</h1>
                </transition>
                <button @click="isTitleShowing = !isTitleShowing" class="px-2 rounded border">Toggle Text</button>
            </div>
            
        </div> -->
    </div>
</template>

<script>
export default {
    data(){
        return {
            currentSlide: 2,
            slides: ["bg-green-600", "bg-yellow-600", "bg-red-600"],
            interval: "",
            isTitleShowing: true
        }
    },
    methods: {
        makeActive(index) {
            this.currentSlide = index
        }
    },
    mounted() {
        this.interval = setInterval(() => {
            this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1
        }, 4000)
    },
    beforeUnmount() {
        clearInterval(this.interval)
    }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>