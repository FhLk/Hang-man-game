import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import GameMode from '../views/gameMode.vue'
import Game from '../views/game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/mode',
      name:'mode',
      component: GameMode
    },
    {
      path:'/:language',
      name:'game',
      component: Game
    },
  ]
})

export default router
