import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Blog from '../views/Blog.vue'
import Rooms from '../views/Rooms.vue'
import Reseto from '../views/Reseto&Bar.vue'
import Contact from '../views/Contact.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: Rooms
  },
  {
    path: '/reseto',
    name: 'reseto',
    component: Reseto
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
