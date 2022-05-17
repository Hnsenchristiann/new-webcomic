import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import ComicShow from '../views/ComicShow.vue'
import ComicsShow from '../views/ComicsShow.vue'
import PageShow from '../views/PageShow.vue'
import MyComicShow from '../views/MyComicShow.vue'
import MyTransactionShow from '../views/MyTransactionShow.vue'
import MyTokenShow from '../views/MyTokenShow.vue'
import AuthorShow from '../views/AuthorShow.vue'
import AccountShow from '../views/AccountShow.vue'
import PaymentShow from '../views/PaymentShow.vue'
import SearchShow from '../views/SearchShow.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/comic',
    name: 'comic show',
    component: ComicShow
  },
  {
    path: '/comic/show',
    name: 'comics show',
    component: ComicsShow
  },
  {
    path: '/page/comic',
    name: 'page show',
    component: PageShow
  },

  {
    path: '/page/comic',
    name: 'page show',
    component: PageShow
  },
  {
    path: '/mycomic',
    name: 'my comic',
    component: MyComicShow
  },
  {
    path: '/transaction',
    name: 'my transaction show',
    component: MyTransactionShow
  },
  {
    path: '/token',
    name: 'my token show',
    component: MyTokenShow
  },
  {
    path: '/author',
    name: 'author show',
    component: AuthorShow
  },
  {
    path: '/account',
    name: 'account show',
    component: AccountShow
  },
  {
    path: '/payment',
    name: 'payment show',
    component: PaymentShow
  },
  {
    path: '/search',
    name: 'search show',
    component: SearchShow
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
