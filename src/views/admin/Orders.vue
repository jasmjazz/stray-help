<template>
  <div>
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div>
      <table class="table mt-4">
        <thead>
          <tr>
            <th>捐助日期</th>
            <th>捐助人</th>
            <th>捐助品項</th>
            <th>是否付款</th>
            <th>詳細資料</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders" :key="item.id">
            <td>{{ item.create_at | date }}</td>
            <td>{{ item.user.name }}</td>
            <td>
              <ul>
                <li v-for="(product,i) in item.products" :key="i">
                  {{ product.product.title }}
                  <span style="color: #01579b">數量：{{ product.qty }}</span>
                </li>
              </ul>
            </td>
            <td>
              <span v-if="item.is_paid" style="color: green">是</span>
              <span v-else style="color: red">否</span>
            </td>
            <td><button class="btn btn-dark" @click="orderDetail(item)">查看</button></td>
          </tr>
        </tbody>
    </table>
    </div>
    <div class="modal fade" id="detailModal" tabindex="-1"
      role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">詳細資料</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="my-2 data">捐助人：{{ detail.user.name }}</div>
            <div class="my-2 data">捐助日期：{{ detail.create_at | date }}</div>
            <div class="my-2 data" v-if="detail.is_paid">付款狀態：已付款</div>
            <div class="my-2 data" v-else>付款狀態：未付款</div>
            <div class="my-2 data">手機號碼：{{ detail.user.tel }}</div>
            <div class="my-2 data">Email：{{ detail.user.email }}</div>
            <div class="my-2 data">地址：{{ detail.user.address }}</div>
            <table class="table mt-4">
              <thead>
                <tr>
                  <th>品項</th>
                  <th>數量</th>
                  <th>單價</th>
                  <th>小計</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in detail.products" :key="item.id">
                  <td>{{ item.product.title }}</td>
                  <td>{{ item.qty }}</td>
                  <td class="text-right">NT {{ item.product.price | currency }}</td>
                  <td class="text-right">NT {{ item.total | currency }}</td>
                </tr>
                <tr>
                  <td colspan="4" class="text-right" style="font-weight: bold; font-size: 16px">
                    總計 NT{{ detail.total | currency }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-dark" data-dismiss="modal">OK</button>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination" @changePage="getOrders"></Pagination>
  </div>
</template>

<script>
import Pagination from '../../components/Pagination';

export default {
  data() {
    return {
      isLoading: false,
      orders: [],
      pagination: {},
      detail: {
        user: {},
        products: {},
      },
    };
  },
  components: {
    Pagination,
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/admin/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        vm.isLoading = false;
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
      });
    },
    orderDetail(item) {
      this.detail = { ...item };
      $('#detailModal').modal('show');
    },
  },
  created() {
    this.getOrders();
  },
};
</script>

<style scoped>
.data {
  font-size: 17px;
}
</style>
