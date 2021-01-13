<template>
  <div>
    <nav class="navbar navbar-light navbar-fixed-top">
      <router-link class="nav-link" to="/home">
        <img src="../../assets/icon/logo.svg" class="d-inline-block logo" alt="logo">
        <span class="name">Stray Help</span>
      </router-link>
      <img src="../../assets/icon/cart.svg" class="d-inline-block cart" alt="shopping-cart">
    </nav>
    <!--carousel-->
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/carousel/carousel01.png" class="d-block w-100" alt="carousel-img">
          <div class="carousel-box">
            <div class="carousel-caption d-none d-md-block carousel-first">
              <p>對你來說，<br/>
              牠可能只是你生命中的一部分；</p>
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
