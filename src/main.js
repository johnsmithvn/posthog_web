import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { useCompass } from './composables/useCompass.js'

const app = createApp(App)

// init compass wrapper (uses window.compass if snippet present)
const { compass } = useCompass()

// expose for debugging
window.compass = compass || window.compass

app.use(router)
app.mount('#app')
