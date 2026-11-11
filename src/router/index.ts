import { createRouter, createWebHistory } from 'vue-router'
import { allRoutes } from '@/router/routes.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: allRoutes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.name !== 'preview' && to.name !== 'demos.index-3') return false
    if (savedPosition) return savedPosition
    if (!/^#list-item-[1-8]$/.test(to.hash)) return false

    if (to.hash === '#list-item-1') return { top: 0 }
    return { el: to.hash }
  },
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title.toString()
  }
  next()
})

export default router
