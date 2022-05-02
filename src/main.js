import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { useAuthStore } from '@/stores/auth-store'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$auth = useAuthStore();
app.mount('#app')
