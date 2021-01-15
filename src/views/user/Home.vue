<template>
  <div>
    <!--content-->
    <div class="container-fluid content">
      <div class="row">
        <div class="col-md-12 col-lg-6 content-left">
          <h2 style="color: #ffffff; line-height: 55px;
            letter-spacing: 6px; font-weight: bold">
            公告
          </h2>
          <h5 style="color: #ffc107; line-height: 40px; letter-spacing: 1px">
            <i class="fas fa-exclamation-triangle"></i>
            165防詐騙宣導<br/>
            提醒您提高警覺，疑似詐騙請撥打165求證
          </h5>
          <h5 style="color: #f5f5f5; line-height: 40px; letter-spacing: 1px">
            ※若需園區簽收單，請加入 LINE@ 或於 FB 粉絲團洽詢<br/>
            ※公司行號、個人慈愛捐助需要報稅者，請與我們聯繫
          </h5>
          <h4 style="line-height: 40px; margin-top: 15px; letter-spacing: 2px">
            <span style="color: #ffffff">點擊下方物資</span><br/>
            <span style="color: red">立即愛心捐糧</span>
          </h4>
        </div>
        <div class="col-md-12 col-lg-6 content-right">
          <div class="card border-0">
            <div class="card-body">
              <p>全省有許多流浪貓狗園區面臨缺糧的問題，<br/>
                愛爸和愛媽給了流浪貓狗一個家，<br/>
                除了讓牠們免於受苦、受餓，<br/>
                也大幅減少了社會環境的問題。<br/>
                隨著收容的數量急遽上升，<br/>
                能力有限的愛爸愛媽需要你我的幫助。
              </p>
              <h4 class="mt-4">『集食』給予最實質的幫助
                <i class="fas fa-paw"
                  style="font-size: 30px; transform:rotate(20deg);
                    vertical-align: top">
                </i>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--ProductList-->
    <div class="container">
      <div class="row mt-5">
        <div class="card-group col-md-6 col-lg-4 mb-4"
          v-for="item in allProducts.slice(firstProduct, firstProduct + countProduct)"
          :key="item.id">
          <div class="card border-0 product-card"
            @click="$router.push(`detail/${item.id}`)">
            <div style="height: 260px;
              background-size: cover;"
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
                <a href="#" class="text-dark">{{ item.title }}</a>
              </h3>
              <p class="card-text" style="font-size: 16px">{{item.description}}</p>
            </div>
            <div class="card-footer d-flex" style="background-color: #494949">
              <h5 style="color: #ffffff; letter-spacing: 1px; padding-top: 4px">
                NT {{ item.price | currency }}
              </h5>
              <button type="button" class="btn btn-outline-light ml-auto"
                @click.stop="addCart(item)">
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
    <!--Message-->
    <div class="container mt-5">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">流浪貓狗助糧平台
            <span class="badge badge-warning tag-2">宗旨</span>
          </h1>
          <hr class="my-4">
          <p>1. 以全台灣急缺糧食的園區優先配送。</p>
          <p>2. 不分大小間、有無政府核可，因為浪浪無法選擇在哪裡生活。</p>
          <p>3. 避免過度集中捐助，物資由平台平均分配。</p>
          <p>4. 助糧流程公開透明，讓愛直達園區。</p>
          <p>5. 領養不棄養！</p>
        </div>
      </div>
    </div>
    <!--iframe-->
    <div class="container iframe mt-4">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item"
          src="https://www.youtube.com/embed/l9itdKFvMz4?rel=0&autoplay=1&loop=1&playlist=l9itdKFvMz4"
          allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      allProducts: [],
      product: {},
      pagination: {},
      countProduct: 6,
      currentPage: 1,
      cart: [],
    };
  },
  methods: {
    getAllProducts(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      const vm = this;
      vm.$http.get(api).then((response) => {
        vm.allProducts = response.data.products.filter(item => item.is_enabled === 1);
        vm.pagination = response.data.pagination;
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
      } else { // Yes
        // 使用cartIndex找到此品項在購物車中的位置，並將data放入tempProduct
        const tempProduct = { ...vm.cart[cartIndex] };
        tempProduct.qty += qty;
        tempProduct.total = parseInt((product.price * tempProduct.qty), 10);
        // 使用cartIndex找到此品項在購物車中的位置並刪除
        vm.cart.splice(cartIndex, 1);
        vm.cart.push(tempProduct); // 由tempProduct建立new data
      }
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.$bus.$emit('message: push', '糧食已加入購物車');
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
    this.getCart();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes blink-smooth {
  to{
    color: transparent;
  }
}
@keyframes blink {
  50%{
    color: transparent;
  }
}
.tag {
  animation: 1s blink-smooth 6 alternate;
  animation-iteration-count: infinite;
}
.tag-2 {
  animation: 1s blink 3 steps(1);
  animation-iteration-count: infinite;
}

.jumbotron {
  letter-spacing: 3px;
}
.jumbotron h1 {
  position: relative;
  font-weight: bolder;
}
.jumbotron .badge {
  position: absolute;
  top: -20px;
  margin-left: 10px;
}
.jumbotron p {
  font-size: 22px;
  line-height: 32px;
}
</style>
