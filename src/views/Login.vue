<template>
  <div class="box box6">
    <div class="content">
      <div class="card">
        <div class="card-body">
          <form class="form-signin" @submit.prevent="signin">
            <h4 class="mb-4">
              <i class="fas fa-paw" style="margin-right: 5px"></i>
              Admin Login
            </h4>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control"
              placeholder="Email address" v-model="user.username" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control"
              placeholder="Password" v-model="user.password" required>
            <button class="btn btn-lg btn-block mt-5" type="submit">Sign In</button>
            <p class="mt-2">
              <router-link class="back-home" to="/">
                <i class="fas fa-arrow-circle-left" style="margin-right: 5px"></i>Home
              </router-link>
            </p>
            <p class="mt-5 mb-3 text-muted">&copy; 2021 Stray Help</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Login',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.API_PATH}/admin/signin`;
      const vm = this;
      this.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const expired = response.data.expired;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          vm.$router.push('/admin/products');
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

body {
  position: relative;
}
.box {
  width: 100%;
  margin: auto;
  position: relative;
}
.box6 .content {
  position: absolute;
  margin: auto;
  width: 400px;
  top: 150px;
  left: 40%;
  transform: translateY(-20px);
}

h4 {
  text-align: center;
  margin-bottom: 20px;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.form-control:focus {
  border-color: #aeaeae;
  box-shadow: 0 0 0 0.2rem rgba(174, 174, 174, 0.25);
}

.btn {
  background-color: #aeaeae;
}
.btn:focus {
  background-color: #aeaeae;
  box-shadow: 0 0 0 0.2rem rgba(97, 97, 97, 0.25);
}

.back-home{
  text-decoration: none;
  color: #757575;
  position: absolute;
  right: 50px;
}
</style>
