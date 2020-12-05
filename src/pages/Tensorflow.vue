!<template>
    <section class="flex w-full">
        <div class="m-auto">
            <div class="mt-10">
                <h1 class="text-2xl my-4">Tensorflow Object Detection</h1>
                <div class="flex flex-wrap justify-center my-4">
                    <div class="w-full flex justify-center">
                    <button 
                        v-if="!isStreaming"
                        @click="openCamera"
                        class="w-32 rounded shadow-md bg-gradient-to-r 
                        from-blue-800 to-indigo-800 text-white px-2 py-1"
                    >
                        Open Camera
                    </button>
                    <div v-else class="flex justify-between">
                        <button 
                            @click="stopStreaming"
                            class="w-32 rounded shadow-md bg-gradient-to-r 
                            from-blue-800 to-indigo-800 text-white px-2 py-1"
                        >
                            Stop Streaming
                        </button>
                            <button 
                            @click="snapshot"
                            class="w-32 rounded shadow-md bg-gradient-to-r 
                            from-blue-800 to-indigo-800 text-white px-2 py-1"
                        >
                            Snapshot
                        </button>
                    </div>
                    </div>
                    <video ref="videoRef" autoplay="true" width="100" />
                </div>
                <div class="flex flex-wrap justify-center">
                   
                    <img ref="imgRef" 
                        src="https://media.istockphoto.com/photos/hand-holding-mobile-phone-on-white-picture-id936722632" 
                        width="200" 
                        crossorigin="anonymous"
                    />
                    <div class="w-full text-center my-4">
                        <button 
                            @click="detect"
                            class="w-32 rounded shadow-md bg-gradient-to-r 
                            from-red-800 to-pink-800 text-white p-2"
                        >
                            <span v-if="isLoading">Loading ...</span>
                            <span v-else>Detect Object</span>
                        </button>
                        <div v-if="result.length > 0">
                            <p>{{result[0].class}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {ref} from 'vue'
require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const cocoSsd = require('@tensorflow-models/coco-ssd');

export default {
    setup(){
        const imgRef = ref("")
        const videoRef = ref("")
        const isLoading = ref(false)
        const isStreaming = ref(false)
        const result = ref([])
        
        async function detect() {
            const img = imgRef.value
            isLoading.value = true
            // Load the model.
            const model = await cocoSsd.load();

            // Classify the image.
            const predictions = await model.detect(img);
            result.value = predictions

            console.log('Predictions: ', predictions);
            isLoading.value = false
        }

        async function openCamera() {
            if (navigator.mediaDevices.getUserMedia) {
                const devices = await navigator.mediaDevices.enumerateDevices()
                const cams = devices.filter((device) => device.kind === "videoinput")
                console.log(cams[0].deviceId)
                const camId = cams[0].deviceId
                const video = cams.length === 1 ? true : {deviceId: {exact: camId}}
                navigator.mediaDevices
                    .getUserMedia({video: video})
                    .then((stream) => {
                        isStreaming.value = true
                        videoRef.value.srcObject = stream
                    })
            }
        }

        function stopStreaming() {
            const stream = videoRef.value.srcObject
            const tracks = stream.getTracks()
            tracks.map((track) => track.stop())
            isStreaming.value = false
        }

        function snapshot() {
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")
            ctx.drawImage(videoRef.value,0,0,200,200)
            const data = canvas.toDataURL("image/png")
            imgRef.value.setAttribute("src", data)
        }

        return {imgRef, result, detect, isLoading, openCamera, 
                videoRef, isStreaming, stopStreaming, snapshot}
    }

}
</script>

<style>

</style>