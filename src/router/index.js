import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Page1',
      path: '/page-1',
      component: () => import('../views/sub_views/Page1.vue'),
    },
    {
      name: 'Page2',
      path: '/page-2-hihi/:id/:name',
      component: () => import('../views/sub_views/Page2.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'ErrorView',
      component: () => import('../views/Error.vue'),
    },
  ],
})

export default router
