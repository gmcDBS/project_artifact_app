import Vue from 'vue';
import Router from 'vue-router';
import Customer from '@/components/Customer';
import Customers from '@/components/Customers';
import Analytics from '@/components/Analytics';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/customers',
      name: 'Customers',
      component: Customers,
    },
    {
      path: '/customer/:id',
      name: 'Customer',
      component: Customer,
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics,
    }
  ],
});
