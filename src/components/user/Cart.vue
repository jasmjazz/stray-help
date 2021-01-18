<template>
  <div>
    <div class="desk-cart">
      <div class="icon" @click="checkcart">
        <div class="num"><span>{{ cart.length }}</span></div>
        <i class="fas fa-shopping-bag"></i>
      </div>
    </div>
    <!--mobile-->
    <div class="mobile-cart">
      <div class="icon">
        <div class="num"><span>{{ cart.length }}</span></div>
        <i class="fas fa-shopping-bag"></i>
      </div>
    </div>
    <!--aside-->
    <div class="aside">
      <div class="list-group">
        <div class="list-group-item title">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mt-2">選購糧食</h5>
            <i class="fas fa-times close-open"
              style="color: #ffffff; font-size: 18px; margin-top: 10px"></i>
          </div>
        </div>
        <div v-if="cart.length === 0">
          <div class="d-flex w-100 justify-content-center">
            <h6 class="mt-5">還沒有選購糧食哦</h6>
          </div>
        </div>
        <div v-else v-for="item in cart" :key="item.id" class="list-group-item">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
              <span v-if="item.category === 0" class="badge badge-success">主食</span>
              <span v-else-if="item.category === 1" class="badge badge-success">副食</span>
              <span v-else class="badge badge-success">零食</span>
            </h5>
            <small class="mt-1">
              <a class="icon" @click.prevent="delCart(item.id)">
                <i class="fas fa-trash" style="color: #ffffff; font-size: 16px"></i>
              </a>
            </small>
          </div>
          <h5 class="mt-3 mb-2">{{ item.title }}</h5>
          <h5>
            {{ item.qty }} X NT {{ item.price | currency}}
          </h5>
        </div>
        <div class="d-flex w-100 justify-content-center">
          <router-link v-if="cart.length === 0" :to="{ name: 'Category' }"
            class="nav-link close-open">
            <button type="button" class="btn btn-outline-light mt-4"
              style="letter-spacing: 1px">
                去逛逛
            </button>
          </router-link>
          <router-link v-else :to="{ name: 'CheckCart' }" class="nav-link close-open">
            <button type="button" class="btn btn-outline-light mt-4"
              style="letter-spacing: 1px">
                捐糧去
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <!--emptyModal-->
    <div v-if="cart.length === 0" class="modal fade" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel"
              style="margin-left: 42%; font-weight: bold; letter-spacing: 1px">
              糧食車
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" style="text-align: center">
            <h4>還沒有選取糧食哦！</h4>
          </div>
          <div class="modal-footer">
            <router-link class="nav-link" :to="{ name: 'Category' }">
              <button type="button" class="btn btn-dark btn-block" data-dismiss="modal"
                style="letter-spacing: 1px">
                去逛逛
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!--cartModal-->
    <div v-else class="modal fade" id="cartModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel"
              style="margin-left: 45%; font-weight: bold; letter-spacing: 1px">
              糧食車
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table cart-table" style="width: 100%">
              <thead>
                <th width="10%"></th>
                <th class="s-no" width="15%">種類</th>
                <th width="20%">品名</th>
                <th width="12%">價格</th>
                <th class="s-no" width="9%"></th>
                <th width="20%">數量</th>
                <th class="s-no" width="14%">小計</th>
              </thead>
              <tbody>
                <tr v-for="item in cart" :key="item.id">
                  <td class="align-middle">
                    <a class="icon" @click.prevent="delCart(item.id)">
                      <i class="fas fa-trash" style="font-size: 20px"></i>
                    </a>
                  </td>
                  <td v-if="item.category === 0" class="align-middle s-no">
                    <h5>
                      <span class="badge badge-dark">主食</span>
                    </h5>
                  </td>
                  <td v-else-if="item.category === 1" class="align-middle s-no">
                    <h5>
                      <span class="badge badge-warning">副食</span>
                    </h5>
                  </td>
                  <td v-else class="align-middle s-no">
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
                  <td class="s-no"></td>
                  <td class="align-middle" style="padding-left: 23px">
                    {{ item.qty }}
                  </td>
                  <td class="align-middle text-right s-no">
                    {{ item.total | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style="font-weight: bold">
                  <td colspan="6" class="text-right s-no">總計</td>
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
    checkcart() {
      const vm = this;
      vm.getCart();
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
    cartList() {
      setInterval(() => {
        this.getCart();
      }, 1000);
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    this.cartList();
    $('.mobile-cart').click((e) => {
      e.preventDefault();
      $('body').toggleClass('open');
    });
    $('.close-open').click((e) => {
      e.preventDefault();
      $('body').removeClass('open');
    });
  },
};
</script>
