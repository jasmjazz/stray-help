import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '', // 對應的虛擬路徑
      component: () => import('../views/Front.vue'), // 對應的元件
      children: [ // 巢狀路徑
        {
          path: '/',
          name: 'Home',
          component: () => import('../views/user/Home.vue'),
        },
        {
          path: 'category',
          name: 'Category',
          component: () => import('../views/user/Category.vue'),
        },
      ],
    },
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
