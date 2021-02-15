import VueRouter from 'vue-router'
import Vue from 'vue'

const Main = () => import('@/views/Main/Main')
const Message = () => import('@/views/Message')
const Profile = () => import('@/views/Profile')
const Setting = () => import('@/views/Setting')

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/setting',
    component: Setting
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
