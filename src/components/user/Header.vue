<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a>
        <router-link :to="{ name: 'Home' }">
        <img src="../../assets/icon/logo.svg"
          width="25" height="25" class="d-inline-block align-top" alt="">
        <span style="color: #000000; font-size: 18px">Stray Help</span>
        </router-link>
      </a>
    </nav>
    <div id="carouselExampleFade" class="carousel slide carousel-fade"
      data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/carousel/carousel04.png" class="d-block w-100 gray"
          style="opacity: 0.9" alt="carousel-img">
          <div class="carousel-box">
            <div class="carousel-caption d-md-block carousel-first">
              <p>對你來說，<br/>
              牠只是你人生的一部分；</p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/carousel/carousel06.png" class="d-block w-100 gray"
            style="opacity: 0.9" alt="carousel-img">
          <div class="carousel-box">
            <div class="carousel-caption d-md-block carousel-second">
              <p>對牠來說，<br/>
              你卻是牠的全世界。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $('.carousel').carousel({
      interval: 4000,
    });
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: gray;
}
</style>
