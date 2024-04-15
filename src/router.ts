import { createRouter, createWebHashHistory } from 'vue-router'
import Rules from '@/pages/rules/index.vue'

export enum RouterName {
  Rules = 'Rules',
}

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: RouterName.Rules },
    },
    {
      path: '/rules',
      name: RouterName.Rules,
      component: Rules,
    },
  ],
})
