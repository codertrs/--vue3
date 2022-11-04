import {
  createRouter,
  createWebHistory
} from 'vue-router'
import PowerView from '@/views/power-view.vue'
import test from '@/views/test.vue';

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'powerview',
      component: PowerView
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }

  ]
})

export default router