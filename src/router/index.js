import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { WeatherRouter } from "@/modules/weather/router/router"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/car",
    name: "Car",
    component: () => import("@/views/Car")
  },

  ...WeatherRouter,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
