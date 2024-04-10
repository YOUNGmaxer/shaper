import { createRouter, createWebHashHistory } from 'vue-router'
import PageA from '@/pages/page-a/index.vue'

export enum RouterName {
  PageA = 'PageA',
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: RouterName.PageA },
    },
    {
      path: '/page-a',
      name: RouterName.PageA,
      component: PageA,
    },
  ],
})
