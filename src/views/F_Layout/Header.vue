<template>
  <div>
    <nav class="navbar navbar-light navbar-fixed-top">
      <router-link class="nav-link" to="/">
        <img src="../../assets/icon/logo.svg" class="d-inline-block logo" alt="logo">
        <span class="name">Stray Help</span>
      </router-link>
      <img src="../../assets/icon/cart.svg" class="d-inline-block cart"
        @click="openModal" alt="shopping-cart">
    </nav>
    <!--carousel-->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/carousel/carousel01.png" class="d-block w-100" alt="carousel-img">
          <div class="carousel-box">
            <div class="carousel-caption d-none d-md-block carousel-first">
              <p>對你來說，<br/>
              牠只是你生命中的一部分；</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/carousel/carousel02.png" class="d-block w-100"
            style="opacity: 0.9;" alt="carousel-img">
          <div class="carousel-box">
            <div class="carousel-caption d-none d-md-block carousel-second">
              <p>對牠來說，<br/>
              你卻是牠的全世界。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--cartModal-->
    <div class="modal fade" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">已選糧食</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table" >
              <thead>
                <th width="10%"></th>
                <th width="20%">種類</th>
                <th width="30%">品名</th>
                <th width="20%">數量</th>
                <th width="5%"></th>
                <th width="15%">價格</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    <a class="icon" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash" style="font-size: 20px"></i>
                    </a>
                  </td>
                  <td class="align-middle" v-if="item.product.category === 0">
                    <h5><span class="badge badge-dark">主食</span></h5>
                  </td>
                  <td class="align-middle" v-else-if="item.product.category === 1">
                    <h5><span class="badge badge-warning">副食</span></h5>
                  </td>
                  <td class="align-middle" v-else><h5>
                    <span class="badge badge-info">零食</span></h5>
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                  </td>
                  <td class="align-middle" style="padding-left: 22px">{{ item.qty }}</td>
                  <td></td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="5" class="text-right">總計</td>
                  <td class="text-right">{{ cart.total | currency}}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-dark">捐糧去</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
    };
  },
  methods: {
    getCart() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart`;
      const vm = this;
      vm.$http.get(api).then((response) => {
        console.log(response.data);
        vm.cart = response.data.data;
      });
    },
    openModal() {
      this.getCart();
      $('#cartModal').modal('show');
    },
    delCart(id) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/cart/${id}`;
      const vm = this;
      vm.$http.delete(api).then((response) => {
        console.log(response.data);
        vm.getCart();
      });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    $('.carousel').carousel({
      interval: 4000,
    });
  },
};
</script>
