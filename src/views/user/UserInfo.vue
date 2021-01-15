<template>
  <div class="container">
    <loading :active.sync="isLoading" loader="dots"></loading>
    <div class="row mt-4" style="font-size: 16px">
      <div class="col-4 col-sm">
        <div class="alert alert-dark" role="alert">
          1. 集糧清單
        </div>
      </div>
      <div class="col-3 col-sm" style="font-weight: bold">
        <div class="alert alert-success" role="alert">
          2. 填寫資料
        </div>
      </div>
      <div class="col-3 col-sm">
        <div class="alert alert-dark" role="alert">
          3. 核對資訊
        </div>
      </div>
      <div class="col-3 col-sm">
        <div class="alert alert-dark" role="alert">
          4. 完成捐糧
        </div>
      </div>
    </div>
    <!--Form-->
    <div class="row mt-4">
      <div class="col-12">
        <div class="card" style="background-color: #f5f5f5">
          <div class="mt-4 row justify-content-center">
            <h4 style="font-weight: bold; color: #494949">
              <i class="fas fa-paw" style="padding-right: 5px"></i>
              捐助人資訊
            </h4>
          </div>
          <div class="card-body">
            <!--表單-->
            <ValidationObserver v-slot="{ handleSubmit }">
            <div class="my-2 row justify-content-center">
              <form class="col-md-6" @submit.prevent="handleSubmit(createOrder)">
                <div class="form-group">
                  <label for="username" style="font-size: 17px">捐助人姓名 *</label>
                  <ValidationProvider rules="required" v-slot="{ errors , classes }">
                    <div :class="classes">
                      <input type="text" id="buyer-name" class="form-control"
                        placeholder="請輸入姓名" v-model="form.user.name"
                        style="margin-bottom: 5px">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="username" style="font-size: 17px">捐助人電話 *</label>
                  <ValidationProvider rules="required|phone" v-slot="{ errors , classes }">
                    <div :class="classes">
                      <input type="text" id="usertel" class="form-control"
                        placeholder="請輸入電話號碼" v-model="form.user.tel"
                        style="margin-bottom: 5px">
                      <span class="text-danger">{{ errors[0] }}</span>
                    </div>
                  </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="useremail" style="font-size: 17px">Email *</label>
                    <ValidationProvider name="email" rules="required|email"
                      v-slot="{ errors , classes }">
                      <div :class="classes">
                        <input type="email" class="form-control" name="email"
                          id="useremail" placeholder="請輸入 Email" v-model="form.user.email"
                          style="margin-bottom: 5px">
                        <span class="text-danger">{{ errors[0] }}</span>
                      </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                  <label for="useraddress" style="font-size: 17px">捐助人地址</label>
                  <input type="text" class="form-control" name="address" id="useraddress"
                    v-model="form.user.address" placeholder="請輸入地址">
                </div>
                <div class="form-group">
                  <label for="comment" style="font-size: 17px">想說的話</label>
                  <textarea name="" id="comment" class="form-control"
                    cols="30" rows="10" v-model="form.message"></textarea>
                </div>
                <div class="text-right">
                  <button class="btn btn-dark">填寫完成</button>
                </div>
              </form>
            </div>
            </ValidationObserver>
            <!--End-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserInfo',
  data() {
    return {
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    createOrder() {
      const api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/order`;
      const vm = this;
      const order = vm.form;
      vm.isLoading = true;
      vm.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.$bus.$emit('message: push', response.data.message);
        } else {
          vm.isLoading = false;
          vm.$bus.$emit('message: push', response.data.message, 'dander');
        }
      });
    },
  },
};
</script>
