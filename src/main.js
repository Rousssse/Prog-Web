import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import TeamsGallery from './TeamsGallery.vue'
import Pari from './components/Classement.vue'
import Matches from './components/UpcomingMatches.vue'

const routes = [
  { path: '/', component: TeamsGallery },
  { path: '/page2', component: Pari },
  { path : '/page3', component: Matches}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App).use(Vue3Lottie)
app.use(router)
app.mount('#app')
