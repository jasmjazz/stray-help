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
    <!--empty-->
    <div v-if="cart.length <= 0" class="modal fade" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel"
              style="margin-left: 42%; font-weight: bold; letter-spacing: 1px">
              集糧盒
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <h4>還沒有選擇糧食哦！</h4>
          </div>
          <div class="modal-footer">
            <router-link class="nav-link" :to="{ name: 'Category' }">
              <button type="button" class="btn btn-dark btn-block" data-dismiss="modal"
                style="letter-spacing: 1px">
                去看看
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--cartModal-->
    <div v-if="cart.length > 0" class="modal fade" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel"
              style="margin-left: 45%; font-weight: bold; letter-spacing: 1px">
              集糧盒
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table">
              <thead>
                <th width="10%"></th>
                <th width="15%">分類</th>
                <th width="20%">品名</th>
                <th width="12%">價格</th>
                <th width="9%"></th>
                <th width="20%">數量</th>
                <th width="14%">小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td class="align-middle">
                    <a class="icon" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash" style="font-size: 20px"></i>
                    </a>
                  </td>
                  <td class="align-middle" v-if="item.category === 0">
                    <h5>
                      <span class="badge badge-dark">主食</span>
                    </h5>
                  </td>
                  <td class="align-middle" v-else-if="item.category === 1">
                    <h5>
                      <span class="badge badge-warning">副食</span>
                    </h5>
                  </td>
                  <td class="align-middle" v-else>
                    <h5>
                      <span class="badge badge-info">零食</span>
                    </h5>
                  </td>
                  <td class="align-middle">
                    {{ item.title }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.price | currency }}
                  </td>
                  <td></td>
                  <td class="align-middle" style="padding-left: 23px">
                    {{ item.qty }}
                  </td>
                  <td class="align-middle text-right">
                    {{ item.total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style="font-weight: bold">
                  <td colspan="6" class="text-right">總計</td>
                  <td class="text-right">{{ money | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="modal-footer">
            <router-link class="nav-link" :to="{ name: 'CheckCart' }">
              <button type="button" class="btn btn-dark" data-dismiss="modal"
                style="letter-spacing: 2px">
                捐糧去
              </button>
            </router-link>
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
      money: 0,
    };
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
    openModal() {
      this.getCart();
      $('#cartModal').modal('show');
    },
    delCart(id) {
      const vm = this;
      vm.cart.forEach((item, index) => {
        if (item.id === id) {
          vm.cart.splice(index, 1);
        }
      });
      localStorage.setItem('cart', JSON.stringify(vm.cart));
      vm.$bus.$emit('message: push', '已刪除糧食');
      vm.getCart();
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
