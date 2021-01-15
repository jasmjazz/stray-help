// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import jquery from 'jquery';
import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import zhTW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';
import VueI18n from 'vue-i18n';

import App from './App';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
Vue.use(VueI18n);
window.$ = jquery;

Vue.component('Loading', Loading);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
localize('zh_TW', zhTW);
Vue.filter('currency', currencyFilter);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

configure({
  classes: {
    valid: 'valid',
    invalid: 'invalid',
  },
});
extend('required', {
  ...required,
  message: '此欄位不可為空',
});
extend('email', {
  ...email,
  message: 'Email 格式不正確',
});
extend('phone', {
  validate: ((value) => {
    const reg = /^09[0-9]{8}$/;
    return reg.test(value);
  }),
  message: '請輸入正確號碼',
});

const i18n = new VueI18n({
  locale: 'zhTW',
});


/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) { // 如果需要驗證
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      if (response.data.success) {
        next();
      } else {
        next({
          path: '/login',
        });
      }
    });
  } else {
    next();
  }
});
