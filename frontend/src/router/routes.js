const HomePage = () => import(/* webpackChunkName: "HomePage" */ '@/pages/home')
const ProfilePage = () => import(/* webpackChunkName: "ProfilePage" */ '@/pages/profile')
const WorkPage = () => import(/* webpackChunkName: "WorkPage" */ '@/pages/work')
const contactPage = () => import(/* webpackChunkName: "contactPage" */ '@/pages/contact')

const NEED_AUTH = {
  requiresAuth: true
}

const routes = [
  // pages
  { path: '/home', name: 'home', component: HomePage, meta: NEED_AUTH },
  { path: '/profile', name: 'profile', component: ProfilePage, meta: NEED_AUTH },
  { path: '/work', name: 'work', component: WorkPage, meta: NEED_AUTH },
  { path: '/contact', name: 'contact', component: contactPage, meta: NEED_AUTH },
  // fallback
  { path: '*', redirect: '/home' },
  { path: '/', redirect: '/home' }
]

export default routes
