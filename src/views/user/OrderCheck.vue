<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row mt-4" style="font-size: 16px">
      <div class="col-4 col-sm">
        <div class="alert alert-dark" role="alert">
          1. 糧食明細
        </div>
      </div>
      <div class="col-4 col-sm">
        <div class="alert alert-dark" role="alert">
          2. 填寫資料
        </div>
      </div>
      <div class="col-4 col-sm">
        <div class="alert alert-success" style="font-weight: bold" role="alert">
          3. 完成捐糧
        </div>
      </div>
    </div>
    <!--Data-->
    <div class="row">
      <div class="col-lg-7 col-sm-12 mt-5">
        <div class="card border-1">
          <div class="card-header bg-dark">
            <h5 style="color: #ffffff">糧食明細</h5>
          </div>
          <div class="card-body">
            <table class="table">
              <thead>
                <th width="30%">品名</th>
                <th width="35%">數量</th>
                <th width="20%">單價</th>
              </thead>
              <tbody>
                <tr v-for="item in order.products" :key="item.id">
                  <td class="align-middle">{{ item.product.title }}</td>
                  <td class="align-middle" style="padding-left: 20px">
                    {{ item.qty }}
                  </td>
                  <td class="align-middle text-right">
                    {{ Math.floor(item.final_total / item.qty)  | currency }}
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr style="font-weight: bold">
                  <td colspan="2" class="text-right">總計</td>
                  <td class="text-right">{{ order.total | currency }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-sm-12 mt-5">
        <h4 class="card">
          <div class="card-header bg-dark">
            <h5 style="color: #ffffff">捐助人資訊</h5>
          </div>
          <div class="card-body">
            <table class="table">
              <tbody>
                <tr>
                  <th>姓名</th>
                  <td>{{ order.user.name }}</td>
                </tr>
                <tr>
                  <th>電話</th>
                  <td>{{ order.user.tel }}</td>
                </tr>
                <tr>
                  <th width="100">Email</th>
                  <td>{{ order.user.email }}</td>
                </tr>
                <tr>
                  <th>地址</th>
                  <td>{{ order.user.address }}</td>
                </tr>
                <tr>
                  <th>付款狀態</th>
                  <td>
                    <h6 v-if="!order.is_paid">
                      <span class="badge badge-danger">尚未付款</span>
                    </h6>
                    <h6 v-else>
                      <span class="badge badge-success">付款完成</span>
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="text-right" v-if="order.is_paid === false">
              <button class="btn btn-dark" @click="payOrder">確認付款</button>
            </div>
          </div>
        </h4>
        <div class="text-right"  v-if="order.is_paid === true">
          <button class="btn btn-warning" style="font-weight: bold"
            @click="$router.push('/')">回去逛逛</button>
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
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.order = response.data.order;
        }
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.$bus.$emit('message: push', '捐糧成功');
          vm.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
