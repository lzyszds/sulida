import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import LzyIcon from '@/components/LzyIcon.vue'
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router)
  .use(pinia)
  .component("LzyIcon", LzyIcon)
  .mount('#app')
