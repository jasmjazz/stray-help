<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <Alert></Alert>
    <Cart></Cart>
    <div class="row mt-4">
      <div class="col-sm-4 col-sm-12 col-md-12 col-lg-4">
        <ul class="nav" style="font-size: 18px">
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
            <div class="card border-0 product-card">
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
                <h4 class="card-title">
                  <a class="text-dark">{{ item.title }}</a>
                </h4>
                <p class="card-text" style="font-size: 16px">{{item.description}}</p>
              </div>
              <div class="card-footer d-flex" style="background-color: #494949">
                <h5 style="color: #ffffff; letter-spacing: 1px; padding-top: 4px">
                  NT {{ item.price | currency }}
                </h5>
                <button type="button" class="btn btn-outline-light ml-auto"
                  style="letter-spacing: 2px" @click="getProduct(item.id)">
                  捐助糧食
                </button>
              </div>
            </div>
          </div>
        </div>
      <!--Modal-->
      <div class="modal fade" id="detailModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <div class="card border-0">
                <div class="image mt-2"
                  style="height: 300px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${singleProduct.imageUrl})`}">
                </div>
                <div class="card-body">
                <h5>
                  <span v-if="singleProduct.category === 0"
                    class="badge badge-dark">主食</span>
                  <span v-else-if="singleProduct.category === 1"
                    class="badge badge-warning">副食</span>
                  <span v-else class="badge badge-info">零食</span>
                </h5>
                <h4 class="mt-3" style="font-weight: bold">{{singleProduct.title }}</h4>
                <h5 class="mt-2" style="padding-top: 12px">
                  {{ singleProduct.description }}</h5>
                <h6>
                  成分｜ {{ singleProduct.content }}</h6>
                <h5 class="card-title mt-4" style="color: #616161">
                  NT {{ singleProduct.price | currency }}
                </h5>
                <select class="form-control mt-3" v-model="num">
                  <option :value="num" v-for="num in 10" :key="num">
                    {{ num }}
                  </option>
                </select>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-dismiss="modal">再逛逛</button>
              <button type="button" class="btn btn-dark" style="letter-spacing: 1px"
              @click="addCart(singleProduct, num)">捐助</button>
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
      singleProduct: [],
      num: 1,
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
        vm.singleProduct = response.data.product;
        vm.num = 1;
        $('#detailModal').modal('show');
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
      $('#detailModal').modal('hide');
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
.card-group .card:hover {
  box-shadow: 6px 6px 6px #757575;
}
.list-group-item {
  cursor: pointer;
  font-size: 16px;
}
</style>
