const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/home')
const ProfilePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/profile')

const NEED_AUTH = {
  requiresAuth: true
}

const routes = [
  // pages
  { path: '/home', name: 'home', component: HomePage, meta: NEED_AUTH },
  { path: '/profile', name: 'profile', component: ProfilePage, meta: NEED_AUTH },
  // fallback
  { path: '*', redirect: '/home' }
]

export default routes
