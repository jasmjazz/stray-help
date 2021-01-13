<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
    <div class="row mt-4">
      <div class="col-12">
        <ul class="nav" style="font-size: 16px">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/category">分類</router-link>
          </li>
          <li class="nav-item">
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
      <div class="col-sm-6 mt-3">
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
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title price">
                  NT {{ product.price | currency }} /
                  <span v-if="product.unit === 0">盒</span>
                  <span v-else-if="product.unit === 1">罐</span>
                  <span v-else>袋</span>
                </h4>
                <select class="form-control mt-4">
                  <option v-for="num in 10" :value="num" :key="num">
                    {{ num }}
                  </option>
                </select>
                <div class="d-flex mt-5">
                  <h6 class="mt-2" style="letter-spacing: 1px; padding-top: 10px">
                    <i class="fas fa-star"></i>
                    給予最『食』質的幫助
                  </h6>
                  <button type="button" class="btn btn-primary ml-auto">
                    <i class="fas fa-spinner fa-spin"></i>
                    給予幫助
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          <h2 style="text-align: center">助糧，不捐款</h2>
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
