<template>
  <div>
    <Cart></Cart>
    <div class="container-fulid introduce">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <figure class="figure">
              <img src="../../assets/image/img15.png"
                class="figure-img img-fluid rounded" alt="image">
            </figure>
          </div>
          <div class="col-md-6 col-sm-12">
            <p>全省有許多流浪貓狗園區面臨缺糧的問題。<br/>
              愛爸和愛媽給了流浪貓狗一個家，<br/>
              除了讓牠們免於受苦、受餓，
              也大幅減少了社會環境的問題。<br/>
              隨著收容的數量急遽上升，<br/>
              能力有限的愛爸愛媽需要你我的幫助。
            </p>
            <h4>『集食』給予最實質的幫助
              <i class="fas fa-paw"></i>
            </h4>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fulid down">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 text">
            <h4>給浪浪一個家</h4>
            <p>有足夠的糧食，讓牠們免於安樂死，留住每一個小生命
            </p>
            <h4>至少讓牠們吃飽</h4>
            <p>讓牠們有更多時間可以等待下一個家</p>
            <h4>一同集食</h4>
            <p>傳播愛心，為流浪貓狗發聲</p>
            <router-link :to="{ name: 'About' }">
              <button class="btn">
                <i class="fas fa-chevron-right"></i>
                關於我們
              </button>
            </router-link>
          </div>
          <div class="col-md-6 col-sm-12">
            <figure class="figure">
              <img src="../../assets/image/img17.png"
                class="figure-img img-fluid rounded" alt="image">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fulid">
      <div class="container question">
        <h3 class="text-center">助糧 Q&A</h3>
        <div class="row mt-5">
          <div class="col-md-4 col-sm-12">
            <h4>1、物資會捐助到哪個園區呢？</h4>
            <p>全省皆有配合的流浪貓狗園區，<br/>
              為了避免過度集中捐贈，物資由平台平均分配<br/>
              以最缺糧的園區優先配送。</p>
          </div>
          <div class="col-md-4 col-sm-12">
            <h4>2、捐助後多久會送到園區呢？</h4>
            <p>平台7-15個工作天內配送完成，<br/>
              因氣候有所影響，園區有些在山上及偏遠地區<br/>
              可加入 LINE@ 詢問小幫手進度。</p>
          </div>
          <div class="col-md-4 col-sm-12">
            <h4>3、如何證明園區有收到物資呢？</h4>
            <p>園區收到物資後會親自簽收，<br/>
              可加入 LINE@ 索取園區簽收單。</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fulid warm">
      <div class="container">
        <div class="col-md-12 content-left">
          <h5 style="color: #ffc107">
            <i class="fas fa-exclamation-triangle"></i>
            165防詐騙宣導<br/>
            提醒您提高警覺，疑似詐騙請撥打165求證
          </h5>
          <h5 style="color: #f5f5f5">
            ※若需簽收單，請加入 LINE@ 或於 FB 洽詢<br/>
            ※若需報稅者，請與我們聯繫
          </h5>
          <h4>
            <span style="color: #ffffff">逛逛下方物資</span><br/>
            <span style="color: red">立即愛心捐糧</span>
          </h4>
        </div>
      </div>
    </div>
    <!--ProductList-->
    <div class="container mt-2">
      <div class="row">
        <div class="card-group col-md-6 col-lg-4 home-card"
          v-for="item in allProducts.slice(firstProduct, firstProduct + countProduct)"
          :key="item.id">
          <div class="card border-1"
            @click="$router.push(`/detail/${item.id}`)">
            <div class="image"
              :style="{backgroundImage: `url(${item.imageUrl})`}">
            </div>
            <div class="card-body">
              <h5 v-if="item.category === 0">
                <span class="badge badge-dark float-right ml-2">主食</span>
              </h5>
              <h5 v-else-if="item.category === 1">
                <span class="badge badge-warning float-right ml-2">副食</span>
              </h5>
              <h5 v-else>
                <span class="badge badge-info float-right ml-2">零食</span>
              </h5>
              <h4 class="card-title">
                <a href="#" class="text-dark">{{ item.title }}</a>
              </h4>
              <p class="card-text">{{item.description}}</p>
            </div>
            <h5 class="text-right"
              style="color: #616161; font-weight: bold;
                letter-spacing: 1px; padding: 0 15px 10px 0">
                NT {{ item.price | currency }}
            </h5>
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
</template>

<script>
import Cart from '../../components/user/Cart';

export default {
  name: 'Home',
  data() {
    return {
      isLoading: false,
      allProducts: [],
      product: {},
      pagination: {},
      countProduct: 3,
      currentPage: 1,
      cart: [],
    };
  },
  components: {
    Cart,
  },
  methods: {
    getAllProducts() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products/all`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.allProducts = response.data.products.filter(item => item.is_enabled === 1);
        vm.isLoading = false;
      });
    },
    getProducts(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    setPage(page) {
      if (page <= 0 || page > this.totalPage) {
        return;
      }
      this.currentPage = page;
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
  },
  computed: {
    firstProduct() {
      return (this.currentPage - 1) * this.countProduct;
    },
    totalPage() {
      return Math.ceil(this.allProducts.length / this.countProduct);
    },
  },
  created() {
    this.getAllProducts();
    this.getProducts();
    this.getCart();
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}


.warm {
  padding: 30px 0 50px 0;
}


.introduce {
  padding: 100px 0 100px 0;
}
.introduce p {
  padding-top: 20px;
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 40px;
}
.introduce h4 {
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 2px;
  font-weight: bold;
  padding-top: 5px;
}

.down {
  padding: 100px 0 100px 0;
  background-color: #ffffff;
}
.down .text {
  padding-top: 5px;
  padding-left: 30px;
}
.down h4 {
  color: #09233b;
  font-weight: bold;
}
.down p {
  letter-spacing: 2px;
  font-size: 18px;
  line-height: 32px;
  padding-top: 5px;
}
.down .btn {
  width: 50%;
  letter-spacing: 2px;
  margin-top: 10px;
  background-color:  #09233b;
  color: #ffffff;
}
.down .btn:hover {
  background-color:#ffc107;
}

.alert {
  background-color: #f5f5dc;
}

.question {
  padding: 100px 0 60px 15px;
}
.question p {
  font-size: 17px;
  line-height: 32px;
}
</style>
