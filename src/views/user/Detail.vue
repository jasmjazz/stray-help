<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row mt-4">
      <div class="col-12">
        <ul class="nav" style="font-size: 16px">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
              <span class="choose">首頁</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category">
              <span class="choose">分類</span>
            </router-link>
          </li>
          <li class="nav-item" style="font-weight: bolder">
            <span class="nav-link active" style="color: #f57f17">詳細</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-sm-6 mt-3">
        <figure class="figure">
          <img :src="product.imageUrl" class="figure-img img-fluid rounded" alt="...">
        </figure>
      </div>
      <div class="col-sm-6 mt-2">
        <div class="row">
          <div class="col-sm-12">
            <div class="card border-0">
              <div class="card-body text">
                <h4 style="margin-bottom: 15px">
                  <span v-if="product.category === 0"
                    class="badge badge-dark">主食</span>
                  <span v-else-if="product.category === 1"
                    class="badge badge-warning">副食</span>
                  <span v-else class="badge badge-info">零食</span>
                </h4>
                <h1 class="mt-3" style="font-weight: bold">{{ product.title }}</h1>
                <p class="mt-3 description">
                  {{ product.description }}</p>
                <p style="font-size: 16px; line-height: 10px; font-weight: bold">
                  成分｜ {{ product.content }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title price">
                  NT {{ product.price | currency }} /
                  <span v-if="product.unit === 0">盒</span>
                  <span v-else-if="product.unit === 1">罐</span>
                  <span v-else>袋</span>
                </h4>
                <select class="form-control mt-4" v-model="product.num">
                  <option :value="num" v-for="num in 10" :key="num">
                    {{ num }}
                  </option>
                </select>
                <div class="d-flex mt-5">
                  <h6 class="mt-2" style="letter-spacing: 1px; padding-top: 10px">
                    <i class="fas fa-star"></i>
                    一份糧食，一份希望
                  </h6>
                  <button type="button" class="btn btn-primary ml-auto"
                    @click="addCart(product.id, product.num)">
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
        <div class="col-12 mt-4">
          <h2 style="text-align: center; line-height: 55px;
            font-style: oblique; text-shadow: #757575 0.1em 0.1em 0.2em"
            >助糧，不捐款</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      productId: '',
      product: {},
      loadingItem: false,
    };
  },
  methods: {
    getProduct() {
      const vm = this;
      vm.productId = vm.$route.params.id;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/${vm.productId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        console.log(response.data.product);
        vm.product = response.data.product;
        vm.isLoading = false;
      });
    },
    addCart(id, qty = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      const vm = this;
      vm.loadingItem = true;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(api, { data: cart }).then((response) => {
        console.log(response.data);
        vm.loadingItem = false;
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style scoped>
.description{
  font-size: 18px;
  padding-top: 12px;
}
.price span{
  padding-left: 3px;
  padding-top: 2px;
  font-size: 22px;
  font-weight: bold;
}
</style>
