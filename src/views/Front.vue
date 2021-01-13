<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../views/F_Layout/Header';
import Footer from '../views/F_Layout/Footer';

export default {
  name: 'Front',
  data() {
    return {
    };
  },
  components: {
    Header,
    Footer,
  },
};
</script>
