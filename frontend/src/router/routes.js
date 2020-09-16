const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/home')

const NEED_AUTH = {
  requiresAuth: true
}

const routes = [
  // pages
  { path: '/home', name: 'home', component: HomePage, meta: NEED_AUTH },
  // fallback
  { path: '*', redirect: '/home' }
]

export default routes
