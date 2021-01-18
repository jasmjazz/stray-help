<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <Alert></Alert>
    <Cart></Cart>
    <div class="row mt-4">
      <div class="col-12">
        <ul class="nav" style="font-size: 18px">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <span class="choose">首頁</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category">
              <span class="choose">種類</span>
            </router-link>
          </li>
          <li class="nav-item" style="font-weight: bolder">
            <span class="nav-link active" style="color: #f57f17">詳細</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-2 no-gutters">
      <div class="col-md-6 col-sm-12 mt-3">
        <figure class="figure">
          <img :src="product.imageUrl" class="figure-img img-fluid rounded" alt="...">
        </figure>
      </div>
      <div class="col-md-6 col-sm-12 detail-card">
        <div class="row">
          <div class="col-12">
            <div class="card border-1">
              <div class="card-body">
                <h4 class="mt-2">
                  <span v-if="product.category === 0"
                    class="badge badge-dark">主食</span>
                  <span v-else-if="product.category === 1"
                    class="badge badge-warning">副食</span>
                  <span v-else class="badge badge-info">零食</span>
                </h4>
                <h3 class="mt-4" style="font-weight: bold">{{ product.title }}</h3>
                <p class="mt-3" style="padding-top: 12px">
                  {{ product.description }}</p>
                <p>
                  成分｜ {{ product.content }}</p>
                <h4 class="card-title price">
                  NT {{ product.price | currency }}
                </h4>
                <select class="form-control mt-4" v-model="num">
                  <option :value="num" v-for="num in 10" :key="num">
                    {{ num }}
                  </option>
                </select>
                <div class="d-flex mt-5 pb-3">
                  <h6 class="mt-2" style="letter-spacing: 1px; padding-top: 10px">
                    <i class="fas fa-star"></i>
                    一份糧食，一份希望
                  </h6>
                  <button type="button" class="btn btn-dark ml-auto"
                    @click="addCart(product, num)">
                    <i v-if="loadingItem"
                      class="fas fa-spinner fa-spin">
                    </i>
                    <span style="font-size: 16px; letter-spacing: 1px">捐助糧食</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../../components/AlertMessage';
import Cart from '../../components/user/Cart';

export default {
  data() {
    return {
      isLoading: false,
      productId: '',
      product: {},
      loadingItem: false,
      cart: [],
      num: 1,
    };
  },
  components: {
    Alert,
    Cart,
  },
  methods: {
    getProduct() {
      const vm = this;
      vm.productId = vm.$route.params.id;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${vm.productId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    getCart() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    addCart(product, qty) {
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
      // 判斷品項是否重複加入
      if (cartIndex === -1) { // NO
        const total = parseInt((product.price * qty), 10);
        vm.$set(product, 'qty', qty);
        vm.$set(product, 'total', total);
        vm.cart.push(product); // 將此品項加入購物車
        vm.$bus.$emit('message: push', '已加入購物車');
      } else { // Yes
        // 使用cartIndex找到此品項在購物車中的位置，並將data放入tempProduct
        const tempProduct = { ...vm.cart[cartIndex] };
        console.log(tempProduct.qty, '123');
        if (tempProduct.qty + qty > 10) {
          vm.$bus.$emit('message: push', '同款糧食不得超過10組！', 'danger');
        } else {
          tempProduct.qty += qty;
          vm.$bus.$emit('message: push', '已加入購物車');
        }
        tempProduct.total = parseInt((product.price * tempProduct.qty), 10);
        // 使用cartIndex找到此品項在購物車中的位置並刪除
        vm.cart.splice(cartIndex, 1);
        vm.cart.push(tempProduct); // 由tempProduct建立new data
      }
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.getCart();
    },
  },
  created() {
    this.getProduct();
    this.getCart();
  },
};
</script>

<style scoped>
.no-gutters{
    margin-right: 0;
    margin-left: 0;
}

.no-gutters>.col,
.no-gutters>[class*=col-]{
    padding-right: 0;
    padding-left: 0;
}
</style>
