<template>
  <div class="container">
    <img src="../assets/image/home_top.png" class="home-top" alt="img" />
    <div class="top_left">
      <img src="../assets/image/Triangle2.png" alt="img" />
      <img src="../assets/image/happiness2.png" alt="img" />
    </div>
    <img src="../assets/image/home_right.png" class="home_right" alt="img" />
    <img src="../assets/image/keyhappine2.png" class="key" alt="img" />
    <img src="../assets/image/logo2.png" class="logo" alt="img" />
    <img
      src="../assets/image/happiness_main.png"
      class="happiness_main"
      alt="img"
    />
    <div class="home-check__box" @click="goRecord">
      <div class="check-main" :class="isClick ? 'active' : ''"></div>
      <span class="check">点击签到</span>
    </div>
    <img src="../assets/image/home_bottom.png" class="home_bg" alt="img" />
    <img
      src="../assets/image/happiness_test.png"
      class="bottom_left"
      alt="img"
    />
    <img
      src="../assets/image/bottom_right.png"
      class="bottom_right"
      alt="img"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isClick: false
    }
  },
  methods: {
    goRecord() {
      this.isClick = true
      setTimeout(() => {
        this.$router.push({
          name: 'Record'
        })
      }, 1000)
      //   window.location.href =
      //     'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzMDM3MjMyMQ==#www.baidu.com'
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.container {
  height: 100vh;
  background: #000 url('../assets/image/bg2.png') no-repeat top center;
  background-size: 100% 100%;
  position: relative;

  .home-top {
    width: 100%;
    height: 213px;
    transform: rotate3d(10, 0, 0.5, 180deg);
  }
  .home_right {
    width: 28px;
    height: 272px;
    position: absolute;
    right: 12px;
    top: 16px;
  }
  .top_left {
    position: absolute;
    top: 19px;
    left: 18px;
  }
  .top_left img:nth-of-type(1) {
    width: 24px;
    height: 32px;
  }
  .top_left img:nth-of-type(2) {
    width: 196px;
    height: 25px;
  }
  .key {
    width: 25px;
    height: 377px;
    position: absolute;
    top: 80px;
    left: 16px;
  }
  .logo {
    width: 244px;
    height: 44px;
    position: absolute;
    left: 136px;
    top: 226px;
  }
  .happiness_main {
    width: 488px;
    height: 352px;
    position: absolute;
    left: 132px;
    top: 334px;
  }
  .home-check__box {
    height: 172px;
    width: 172px;
    position: absolute;
    top: 748px;
    left: 289px;
    text-align: center;
    line-height: 172px;
  }
  .check-main {
    width: 100%;
    height: 100%;
    background: url('../assets/image/Line2.png') no-repeat center/cover;
  }
  .check-main.active {
    transform-origin: center;
    animation: run 0.5s linear infinite;
  }
  .check {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
  }

  .home_bg {
    position: absolute;
    width: 100%;
    height: 171px;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  .bottom_left {
    width: 169px;
    height: 15px;
    position: absolute;
    bottom: 30px;
    left: 12px;
    z-index: 2;
  }
  .bottom_right {
    width: 32px;
    height: 12px;
    position: absolute;
    right: 12px;
    bottom: 26px;
    z-index: 2;
  }
  @keyframes run {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
