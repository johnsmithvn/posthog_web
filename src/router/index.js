import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import BillingView from '../views/BillingView.vue'
import CashView from '../views/CashView.vue'
import ProfileView from '../views/ProfileView.vue'
import FeedbackView from '../views/FeedbackView.vue'
import ErrorView from '../views/ErrorView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/login', name: 'login', component: LoginView },
  { path: '/dashboard', name: 'dashboard', component: DashboardView },
  { path: '/billing', name: 'billing', component: BillingView },
  { path: '/cash', name: 'cash', component: CashView },
  { path: '/profile', name: 'profile', component: ProfileView },
  { path: '/feedback', name: 'feedback', component: FeedbackView },
  { path: '/error', name: 'error', component: ErrorView },
  // fallback
  { path: '/:pathMatch(.*)*', redirect: '/error' },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  // send page_view when route changes
  if (window.compass && typeof window.compass.capture === 'function') {
    window.compass.capture('page_view', { path: to.fullPath })
  } else {
    console.log('[compass] page_view', to.fullPath)
  }
})

export default router
