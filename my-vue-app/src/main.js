import { createApp } from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import './assets/tailwind.css'
import './style.css'

const app = createApp(App)

app.use(VueScrollTo)
app.mount('#app')
