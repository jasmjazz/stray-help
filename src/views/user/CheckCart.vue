<template>
  <div class="container">
    <Alert></Alert>
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row mt-4" style="font-size: 16px">
      <div class="col-md-4 col-sm-12" style="font-weight: bold">
        <div class="alert alert-success" role="alert">
          1. 糧食明細
        </div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="alert alert-dark" role="alert">
          2. 填寫資料
        </div>
      </div>
      <div class="col-md-4 col-sm-12">
        <div class="alert alert-dark" role="alert">
          3. 完成捐糧
        </div>
      </div>
    </div>
    <!--Cart-->
    <div class="card border-1">
      <div class="card-body">
        <h4 v-if="cart.length === 0" class="text-center"
          style="padding: 50px">還沒有選擇糧食哦，去逛逛吧！</h4>
        <ul v-else>
          <li v-for="item in cart" :key="item.id">
            <div class="row">
              <div class="col-2 p-0">
                <a class="icon" @click.prevent="delCart(item.id)">
                  <i class="fas fa-trash" style="font-size: 18px"></i>
                </a>
              </div>
              <div class="col-7 p-0">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <p style="font-size: 18px">{{ item.title }}</p>
                  </div>
                  <div class="col-12 col-md-6">
                    <i class="far fa-minus-square"
                      style="font-size: 20px; vertical-align: text-bottom"
                      @click="editNum(item, -1)">
                    </i>
                    <span style="font-size: 18px; margin-left: 15px; margin-right: 15px">
                      {{ item.qty }}
                    </span>
                    <i class="far fa-plus-square"
                      style="font-size: 20px; vertical-align: text-bottom"
                      @click="editNum(item, +1)">
                    </i>
                  </div>
                </div>
              </div>
              <div class="col-3 p-0 text-right">
                <p style="font-size: 18px; padding-right: 15px">NT {{ item.price | currency}}</p>
              </div>
            </div>
            <hr/>
          </li>
          <p v-if="cart.length > 0" class="text-right" style="font-weight: bold; font-size: 18px">
            總計 NT {{ money | currency }}
          </p>
        </ul>
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
<style scoped>
ul {
  list-style-type: none;
}
</style>
