<template>
  <div>
    <nav class="navbar navbar-dark bg-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="col-sm-3 col-md-2 mr-0" style="color: #ffffff">Stray Help</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item">
          <a class="nav-link" @click.prevent="signout">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    signout() {
      const api = `${process.env.API_PATH}/logout`;
      const vm = this;
      vm.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.$router.push('/login');
        }
      });
    },
  },
};
</script>
