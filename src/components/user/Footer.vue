<template>
  <div>
    <div class="fixed-bottom arrow"><img src="../../assets/icon/arrow.svg"></div>
    <footer class="container footer mt-3">
      <div class="row">
        <div class="col footer-text">
          <h5>Contact Us</h5>
          <p>Tel：0809-098-199</p>
        </div>
        <div class="col footer-icon">
          <a href="https://www.facebook.com/99catdog" target="_blank"><img src="../../assets/icon/fb.svg" class="fb"></a>
          <a href="https://line.me/R/ti/p/%40zxt1563w" target="_blank"><img src="../../assets/icon/line.svg"></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  mounted() {
    // arrow up
    $('.fixed-bottom img').click(() => {
      $('html, body').animate({
        scrollTop: 0,
      }, 1000);
    });
  },
};
</script>
