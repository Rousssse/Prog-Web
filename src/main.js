import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'
import LeagueAndTeam from './components/LeagueAndTeamPage.vue'
import UpMatches from './components/UpcomingMatches.vue'
import PreviousMatches from './components/PreviousMatches.vue'

const routes = [
  { path : '/', component: UpMatches},
  { path: '/page2', component: LeagueAndTeam },
  { path : '/page3', component : PreviousMatches }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App).use(Vue3Lottie)
app.use(router)
app.mount('#app')
