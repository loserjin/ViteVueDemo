import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// router使用
const app = createApp(App)
app.use(router).mount('#app')
// createApp(App).mount('#app').use(router)
