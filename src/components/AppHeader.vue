<template>
    <nav class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-5"     
    >
            <router-link class="md:hidden" to="/">Home</router-link>
            <router-link v-for="item in list" 
                            :key="item.to" 
                            class="mx-2 hidden md:inline-block" 
                            :to="item.to"
            >
                {{item.title}}
            </router-link>
            <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
            <button v-else class="mx-2" @click='openLogin'>Login</button>
            
    </nav>
</template>

<script>
import firebase from '../utilities/firebase'
export default {
    data(){
        return {
            list: [
                {title: "DcHeros", to: "/DcHeros"},
                {title: "Calendar", to: "/Calendar"},
                {title: "Markdown", to: "/Markdown"},
                {title: "Slider", to: "/Slider"},
                {title: "Calculator", to: "/Calculator"},
                {title: "ReusableModal", to: "/ReusableModal"},
                {title: "Chat", to: "/Chat"},
                {title: "UserCrud", to: "/UserCrud"},
                {title: "Tensorflow", to: "/Tensorflow"},
            ],
           
        }
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        }
    },
    methods: {
        logout() {
            firebase.auth().signOut()
        },
        openLogin() {
            this.$store.commit("setLoginModal", true);
        },
    }
}
</script>

<style>

</style>