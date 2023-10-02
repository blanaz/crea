import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Aarhus from '../views/Aarhus.vue'
import Venice from '../views/Venice.vue'
import Paris from '../views/Paris.vue'
import Play from '../views/Play.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/paris',
    name: 'Paris',
    component: Paris
  },
  {
    path: '/aarhus',
    name: 'Aarhus',
    component: Aarhus
  },
  {
    path: '/venice',
    name: 'Venice',
    component: Venice
  },
  {
    path: '/play',
    name: 'Play',
    component: Play
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
