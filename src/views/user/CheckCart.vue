<template>
  <div class="container">
    <Alert></Alert>
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row mt-4" style="font-size: 16px">
      <div class="col-4 col-sm" style="font-weight: bold">
        <div class="alert alert-success" role="alert">
          1. 糧食明細
        </div>
      </div>
      <div class="col-4 col-sm">
        <div class="alert alert-dark" role="alert">
          2. 填寫資料
        </div>
      </div>
      <div class="col-4 col-sm">
        <div class="alert alert-dark" role="alert">
          3. 完成捐糧
        </div>
      </div>
    </div>
    <!--Cart-->
    <div class="row mt-4">
      <div class="col-12">
        <div class="card border-1">
          <div class="card-body">
            <table v-if="cart.length > 0 " class="table mt-4" style="font-size: 17px">
              <thead>
                <th width="10%"></th>
                <th width="15%">種類</th>
                <th width="20%">品名</th>
                <th width="12%">價格</th>
                <th width="7%"></th>
                <th width="22%">數量</th>
                <th width="14%">小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td class="align-middle">
                    <a class="icon" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash" style="font-size: 20px"></i>
                    </a>
                  </td>
                  <td class="align-middle" v-if="item.category === 0">
                    <h5>
                      <span class="badge badge-dark">主食</span>
                    </h5>
                  </td>
                  <td class="align-middle" v-else-if="item.category === 1">
                    <h5>
                      <span class="badge badge-warning">副食</span>
                    </h5>
                  </td>
                  <td class="align-middle" v-else>
                    <h5>
                      <span class="badge badge-info">零食</span>
                    </h5>
                  </td>
                  <td class="align-middle">
                    {{ item.title }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.price | currency }}
                  </td>
                  <td></td>
                  <td class="align-middle">
                    <i class="far fa-minus-square"
                      style="font-size: 20px; vertical-align: text-bottom"
                      @click="editNum(item, -1)"></i>
                    <span style="font-size: 18px; margin-left: 20px; margin-right: 20px">
                      {{ item.qty }}
                    </span>
                    <i class="far fa-plus-square"
                      style="font-size: 20px; vertical-align: text-bottom"
                      @click="editNum(item, +1)"></i>
                  </td>
                  <td class="align-middle text-right">
                    {{ item.total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr v-if="money !== 0" style="font-weight: bold">
                  <td colspan="6" class="text-right">總計</td>
                  <td class="text-right">{{ money | currency }}</td>
                </tr>
              </tfoot>
            </table>
            <h3 v-else class="mt-4 mb-4" style="text-align: center">
              還沒有選取糧食哦，快去看看吧！
            </h3>
          </div>
        </div>
      </div>
    </div>
    <!--Pay-->
    <div class="row mt-4">
      <div v-if="cart.length > 0" class="col-12" style="text-align: right">
        <router-link :to="{ name: 'Category' }">
          <button class="btn btn-warning" style="letter-spacing: 2px;
            margin-right: 10px; font-weight: bold; font-size: 18px">
            再逛逛
          </button>
        </router-link>
        <button class="btn btn-dark"
          style="letter-spacing: 2px; font-weight: bold; font-size: 17px"
          @click="addCart">
          確定捐糧
        </button>
      </div>
      <div v-else class="col-12" style="text-align: right">
        <router-link :to="{ name: 'Category' }">
          <button class="btn btn-warning" style="letter-spacing: 2px;
            margin-right: 10px; font-weight: bold; font-size: 18px">
            去逛逛
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../../components/AlertMessage';

export default {
  name: 'CheckCart',
  data() {
    return {
      isLoading: false,
      cart: [],
      money: 0,
    };
  },
  components: {
    Alert,
  },
  methods: {
    getCart() {
      const vm = this;
      vm.money = 0;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      if (vm.cart.length > 0) {
        vm.cart.forEach((item) => {
          vm.money += item.total;
        });
      }
    },
    editNum(product, num) {
      const qty = parseInt((product.qty + num), 10);
      this.updateCart(product, qty);
    },
    updateCart(product, num) {
      const vm = this;
      let cartIndex = -1; // 因陣列索引由0開始，不可設置為0
      vm.getCart();
      if (vm.cart.length > 0) { // 購物車內有產品
        vm.cart.forEach((item, index) => {
          if (item.id === product.id) { // 品項已加入過
            cartIndex = index;
          }
        });
      }
      // 設定最多只可選10項
      if (num >= 10) {
        vm.cart[cartIndex].qty = 10;
        vm.$bus.$emit('message: push', '同款糧食不得超過10組！', 'danger');
      } else if (num <= 1) {
        vm.cart[cartIndex].qty = 1;
      } else {
        vm.cart[cartIndex].qty = num;
      }
      const total = parseInt((vm.cart[cartIndex].price * vm.cart[cartIndex].qty), 10);
      vm.cart[cartIndex].total = total;
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
    delCart(id) {
      console.log(id);
      const vm = this;
      vm.cart.forEach((item, index) => {
        if (item.id === id) {
          vm.cart.splice(index, 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
    // 加入server購物車
    addCart() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
      vm.cart.forEach((item) => {
        const product = {
          product_id: item.id,
          qty: item.qty,
        };
        vm.$http.post(api, { data: product }).then((response) => {
          if (response.data.success) {
            vm.isLoading = false;
            this.$router.push('/userinfo');
          }
        });
      });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    const height = window.outerHeight / 2;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  },
};
</script>
