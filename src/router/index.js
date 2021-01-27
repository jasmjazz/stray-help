import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

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
          path: 'about',
          name: 'About',
          component: () => import('../views/user/About.vue'),
        },
        {
          path: 'category',
          name: 'Category',
          component: () => import('../views/user/Category.vue'),
        },
        {
          path: 'detail/:id',
          name: 'Detail',
          component: () => import('../views/user/Detail.vue'),
        },
        {
          path: 'checkcart',
          name: 'CheckCart',
          component: () => import('../views/user/CheckCart.vue'),
        },
        {
          path: 'userinfo',
          name: 'UserInfo',
          component: () => import('../views/user/UserInfo.vue'),
        },
        {
          path: 'ordercheck/:orderId',
          name: 'OrderCheck',
          component: () => import('../views/user/OrderCheck.vue'),
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
        {
          path: 'orders',
          name: 'Orders',
          component: () => import('../views/admin/Orders.vue'),
          meta: { requiresAuth: true }, // 需經過驗證
        },
      ],
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
