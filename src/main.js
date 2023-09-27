
import './assets/transitions.css'

import { createApp, markRaw  } from 'vue'
import { createPinia } from 'pinia'
import Vue3Lottie from 'vue3-lottie'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

app.use(pinia)
app.use(router)
app.use(Vue3Lottie)

app.mount('#app')
