import { createApp } from 'vue'
import './style.css'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { Foo } from './views/Foo'
import { Bar } from './views/Bar'

const routes = [
  { path: '/', component: Foo },
  { path: '/about', component: Bar }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
