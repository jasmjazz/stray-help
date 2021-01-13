<template>
  <div>
    <Header></Header>
    <!--content-->
    <div class="container-fluid content">
      <div class="row">
        <div class="col-sm-6 box content-left">
          <h2><span class="typing typing-start" style="display: inline-block">浪愛</span><br/>
          <span class="typing typing-delay" style="display: inline-block">不缺糧</span></h2>
        </div>
        <div class="col-sm-6 box">
          <p>全省有許多流浪貓狗園區面臨著缺糧的問題，<br/>
            愛爸和愛媽給了流浪貓狗一個家<br/>
            除了讓牠們免於受苦、受餓，也大幅減少了社會環境的問題。<br/>
            隨著收容的數量急遽上升<br/>
            能力有限的愛爸愛媽需要你我的幫助。
          </p>
          <h4>『集食』給予最實質的幫助</h4>
        </div>
      </div>
    </div>
    <ProductsList></ProductsList>
    <!--story-->
    <div class="container" style="margin-top: 30px">
      <div class="jumbotron">
        <div class="container">
          <h1 class="display-4">流浪貓狗溫飽平台
            <span class="badge badge-warning tag-2">宗旨</span>
          </h1>
          <hr class="my-4">
          <p>1. 以全台灣急缺糧食的園區優先配送。</p>
          <p>2. 不分大小間、有無政府核可，因為浪浪無法選擇在哪裡生活。</p>
          <p>3. 避免過度集中捐助，物資由平台平均分配。</p>
          <p>4. 助糧流程公開透明，讓愛直達園區。</p>
          <p>5. 領養不棄養！</p>
        </div>
      </div>
    </div>
    <!--iframe-->
    <div class="container iframe">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item"
          src="https://www.youtube.com/embed/l9itdKFvMz4?rel=0&autoplay=1&loop=1&playlist=l9itdKFvMz4"
          allow="autoplay; encrypted-media" allowfullscreen>
        </iframe>
      </div>
    </div>
    <!--arrow-->
    <div class="fixed-bottom arrow"><img src="../assets/icon/arrow.svg"></div>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from '../views/H_Layout/Header';
import ProductsList from '../views/H_Layout/ProductList';
import Footer from '../views/H_Layout/Footer';

export default {
  name: 'Home',
  data() {
    return {
      countPage: 5,
    };
  },
  components: {
    Header,
    ProductsList,
    Footer,
  },
  created() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@keyframes blink-smooth {
  to{
    color: transparent;
  }
}
@keyframes blink {
  50%{
    color: transparent;
  }
}
.tag {
  animation: 1s blink-smooth 6 alternate;
  animation-iteration-count: infinite;
}
.tag-2 {
  animation: 1s blink 3 steps(1);
  animation-iteration-count: infinite;
}

.jumbotron {
  letter-spacing: 3px;
}
.jumbotron h1 {
  position: relative;
  font-weight: bolder;
}
.jumbotron .badge {
  position: absolute;
  top: -20px;
  margin-left: 10px;
}
.jumbotron p {
  font-size: 22px;
  line-height: 32px;
}
.content {
  background-color: #e0e0e0;
  padding-top: 80px;
  padding-bottom: 100px;
}

.typing {
  white-space: nowrap;
  overflow: hidden;
  visibility: hidden;
}
.typing-start {
  animation: typing-start 2s steps(20,end) 1s 1 normal forwards running;
}
.typing-delay {
  animation: typing-delay 2s steps(20,end) 3s 1 normal forwards running;
}
/* 列印效果 */
@keyframes typing-start {
  from{height: 0;}
  to{height: 200px; visibility: visible;}
}
@keyframes typing-delay {
  from{height: 0;}
  to{height: 200px; visibility: visible;}
}

.content-left {
  position: relative;
}
.content-left h2 {
  position: absolute;
  margin: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  letter-spacing: 8px;
  writing-mode: vertical-lr;
  font-size: 56px;
  line-height: 60px;
}
.box p{
  letter-spacing: 3px;
  font-size: 22px;
  line-height: 32px;
}
.box h4 {
  letter-spacing: 5px;
  font-weight: bolder;
  font-size: 30px;
  line-height: 40px;
}
@media (max-width: 480px) {
  .content-left {
    border-bottom-style: 1px solid;
    border-bottom-color: #ffffff;
  }
  .box h2 {
    font-size: 40px;
    line-height: 52px;
  }
  .box p {
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 26px;
  }
}

@media (max-width: 480px) {
  .content .box {
    height: 200px;
  }
}
.iframe {
  margin-top: 30px;
}
.arrow {
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
}
.arrow img {
  position: absolute;
  right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
</style>
