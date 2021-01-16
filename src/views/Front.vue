<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/user/Header';
import Footer from '../components/user/Footer';

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
