import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Vue3Mq, MqResponsive } from "vue3-mq";
import './index.css'

createApp(App)
.use(router)
.use(Vue3Mq, {
    preset: "tailwind"
})
.component("mq-responsive", MqResponsive)
.mount('#app')

