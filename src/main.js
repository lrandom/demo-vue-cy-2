import './assets/main.css'
import Button from '@/components/Button.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.directive('focus', {
  mounted(el) {
    el.focus()
  },
})

app.component('Button', Button)
app.use(createPinia())
app.use(router)
app.mount('#app')
