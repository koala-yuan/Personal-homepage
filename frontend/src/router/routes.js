const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/home')
const ProfilePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/profile')
const WorkPage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/work')

const NEED_AUTH = {
  requiresAuth: true
}

const routes = [
  // pages
  { path: '/home', name: 'home', component: HomePage, meta: NEED_AUTH },
  { path: '/profile', name: 'profile', component: ProfilePage, meta: NEED_AUTH },
  { path: '/work', name: 'work', component: WorkPage, meta: NEED_AUTH },
  // fallback
  { path: '*', redirect: '/home' },
  { path: '/', redirect: '/home' }
]

export default routes
