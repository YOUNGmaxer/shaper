import '@/style'
import App from './Content.vue'
import { router } from '@/router'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
