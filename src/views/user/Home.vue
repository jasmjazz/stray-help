<template>
  <div>
    <!--content-->
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-6 box content-left">
          <h2>浪愛<br/>
          不流浪</h2>
        </div>
        <div class="col-sm-6 box content-right">
          <p>全省有許多流浪貓狗園區面臨著缺糧的問題，<br/>
            愛爸和愛媽給了流浪貓狗一個家，<br/>
            除了讓牠們免於受苦、受餓，也大幅減少了社會環境的問題。<br/>
            隨著收容的數量急遽上升，<br/>
            能力有限的愛爸愛媽需要你我的幫助。
          </p>
          <h4>『集食』給予最實質的幫助<i class="fas fa-paw"
            style="padding: 5px; font-size: 25px; transform:rotate(20deg)"></i></h4>
        </div>
      </div>
    </div>
    <!--ProductList-->
    <div class="container">
      <div class="row mt-5">
        <div class="card-group col-md-4 mb-4"
          v-for="item in allProducts.slice(firstProduct, firstProduct + countProduct)"
          :key="item.id">
          <div class="card border-0 shadow-sm" @click="$router.push(`detail/${item.id}`)">
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
              <button type="button" class="btn btn-outline-light ml-auto">
                <i class="fas fa-spinner fa-spin"></i>
                給予幫助
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
    <div class="container" style="margin-top: 30px">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">流浪貓狗溫飽平台
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
    <div class="container iframe">
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
  data() {
    return {
      allProducts: [],
      product: {},
      pagination: {},
      countProduct: 6,
      currentPage: 1,
    };
  },
  methods: {
    getAllProducts(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/products?page=${page}`;
      const vm = this;
      vm.$http.get(api).then((response) => {
        console.log(response.data);
        vm.allProducts = response.data.products;
        vm.pagination = response.data.pagination;
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
      return Math.ceil(this.allProducts.length / this.countProduct);
    },
  },
  created() {
    this.getAllProducts();
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
.content {
  background-color: #e0e0e0;
  padding-top: 70px;
  padding-bottom: 70px;
}

.content-left {
  position: relative;
}
.content-left h2 {
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  writing-mode: vertical-lr;
  letter-spacing: 8px;
  font-size: 56px;
  line-height: 60px;
}
.content-right p{
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 36px;
}
/*打字機效果*/
@keyframes typing {
  from{
    width: 0;
  }
}
@keyframes caret {
  50%{
    border-right-color: transparent;
  }
}
.content-right h4 {
  font-size: 30px;
  font-weight: bolder;
  line-height: 40px;
  letter-spacing: 5px;
  width: 17.5em;
  white-space: nowrap;
  overflow: hidden;
  border-right: .06em solid;
  animation: typing 5s steps(15) infinite, caret 1s steps(1) infinite;
}

.card:hover {
  cursor: pointer;
  transform: translate(0, -10px);
}

@media (max-width: 480px) {
  .content-left {
    border-bottom-style: 1px solid;
    border-bottom-color: #ffffff;
  }
  .box h2 {
    font-size: 40px;
    line-height: 52px;
  }
  .box p {
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 26px;
  }
}

@media (max-width: 480px) {
  .content .box {
    height: 200px;
  }
}
.iframe {
  margin-top: 30px;
}
</style>
