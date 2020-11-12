import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import GameRoom from '../views/GameRoom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/game-room',
    name: 'GameRoom',
    component: GameRoom,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.name) next({ name: 'Login' })
  else if (to.name === 'Login' && localStorage.name) next({ name: 'GameRoom' })
  else next()
})

export default router
