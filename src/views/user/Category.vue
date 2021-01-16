<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <Alert></Alert>
    <Cart></Cart>
    <div class="row mt-4">
      <div class="col-sm-4 col-sm-12 col-md-12 col-lg-4">
        <ul class="nav" style="font-size: 16px;">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><span class="choose">首頁</span></router-link>
          </li>
          <li class="nav-item" style="font-weight: bolder">
            <span class="nav-link active" style="color: #f57f17">種類</span>
          </li>
        </ul>
        <ul class="list-group mt-2">
          <li class="list-group-item" @click="getCategory(3)"
            :class="{ active: category === 3 }">全部</li>
          <li class="list-group-item" @click="getCategory(0)"
            :class="{ active: category === 0 }">主食</li>
          <li class="list-group-item" @click="getCategory(1)"
            :class="{ active: category === 1 }">副食</li>
          <li class="list-group-item" @click="getCategory(2)"
            :class="{ active: category === 2 }">零食</li>
        </ul>
      </div>
      <div class="col-sm-8 mt-5 col-sm-12 col-md-12 col-lg-8">
        <div class="row">
          <div class="card-group col-md-6 mb-4"
            v-for="item in products.slice(firstProduct, firstProduct + countProduct)"
            :key="item.id">
            <div class="card border-0 product-card"
              @click="$router.push(`detail/${item.id}`)">
              <div style="height: 250px; background-size: cover;"
                :style="{backgroundImage: `url(${item.imageUrl})`}">
              </div>
              <div class="card-body">
                <h4 v-if="item.category === 0">
                  <span class="badge badge-dark float-right ml-2">主食</span>
                </h4>
                <h4 v-else-if="item.category === 1">
                  <span class="badge badge-warning float-right ml-2">副食</span>
                </h4>
                <h4 v-else>
                  <span class="badge badge-info float-right ml-2">零食</span>
                </h4>
                <h3 class="card-title">
                  <a class="text-dark">{{ item.title }}</a>
                </h3>
                <p class="card-text" style="font-size: 16px">{{item.description}}</p>
              </div>
              <div class="card-footer d-flex" style="background-color: #494949">
                <h5 style="color: #ffffff; letter-spacing: 1px; padding-top: 4px">
                  NT {{ item.price | currency }}
                </h5>
                <button type="button" class="btn btn-outline-light ml-auto"
                  style="letter-spacing: 2px" @click.stop="addCart(item)">
                  捐助糧食
                </button>
              </div>
            </div>
          </div>
        </div>
      <!--pagination-->
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item"
              v-for="page in totalPage" :key="page"
              :class="{'active': currentPage === page}"
              @click.prevent="setPage(page)">
              <a class="page-link" href="#">{{ page }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from '../../components/AlertMessage';
import Cart from '../../components/user/Cart';

export default {
  name: 'Category',
  data() {
    return {
      isLoading: false,
      allProducts: [],
      countProduct: 6,
      currentPage: 1,
      category: 3, // 取得全部分類
      products: [],
      cart: [],
    };
  },
  components: {
    Alert,
    Cart,
  },
  methods: {
    getAllProducts(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        console.log(response.data);
        vm.allProducts = response.data.products.filter(item => item.is_enabled === 1);
        vm.products = response.data.products;
        vm.isLoading = false;
      });
    },
    getProduct(id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        console.log(response);
        vm.isLoading = false;
      });
    },
    getCategory(num) {
      const vm = this;
      if (num === 3) {
        vm.products = vm.allProducts;
      } else {
        vm.products = vm.allProducts.filter(item => item.category === num);
      }
      vm.category = num;
    },
    getCart() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart')) || [];
    },
    addCart(product, qty = 1) {
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
    setPage(page) {
      if (page <= 0 || page > this.totalPage) {
        return;
      }
      this.currentPage = page;
    },
  },
  computed: {
    firstProduct() {
      return (this.currentPage - 1) * this.countProduct;
    },
    totalPage() {
      return Math.ceil(this.products.length / this.countProduct);
    },
  },
  created() {
    this.getAllProducts();
    this.getCart();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.list-group-item {
  cursor: pointer;
  font-size: 16px;
}
</style>
