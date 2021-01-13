import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: () => import('../views/admin/Dashboard.vue'),
      children: [ // 巢狀路徑
        {
          path: 'products',
          name: 'Products',
          component: () => import('../views/admin/Products.vue'),
          meta: { requiresAuth: true }, // 需經過驗證
        },
      ],
    },
  ],
});
