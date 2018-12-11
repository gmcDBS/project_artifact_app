import Vue from 'vue';
import Router from 'vue-router';
import Repairs from '@/components/Repairs';
import Customers from '@/components/Customers';
import Analytics from '@/components/Analytics';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/repairs',
      name: 'Repairs',
      component: Repairs,
    },
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics,
    }
  ],
});
