import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerIcons from '@/global/registerIcons'
import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App)
app.use(store).use(registerIcons).use(router).mount('#app')
