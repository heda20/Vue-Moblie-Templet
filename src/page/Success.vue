<template>
  <div class="success">
    <!-- <img src="../assets/image/top_bg.png" class='home-top' alt="img"> -->
    <div class="top_left">
      <img src="../assets/image/Triangle2.png" alt="img" />
      <img src="../assets/image/happiness2.png" alt="img" />
    </div>
    <img src="../assets/image/home_right.png" class="home_right" alt="img" />
    <img src="../assets/image/keyhappine2.png" class="key" alt="img" />
    <div class="combined_main">
      <img
        src="../assets/image/record_success.png"
        class="record_success"
        alt=""
      />
      <span class="success-hinit">恭喜您，签到成功！</span>
    </div>
    <!-- <img src="../assets/image/combined.png" class="combined_main" alt="img"> -->
    <div class="home-check__box" @touchstart="touchStart" @touchend="touchEnd">
      <div class="check-main" :class="isTouch ? 'active' : ''"></div>
      <span class="success_btn">点击领取签到礼品</span>
    </div>
    <img src="../assets/image/home_top.png" class="home_bg" alt="img" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      isTouch: false,
      statTime: 0,
      endTime: 0
    }
  },
  methods: {
    touchStart() {
      this.isTouch = true
      this.statTime = new Date().getTime()
    },
    touchEnd() {
      setTimeout(() => {
        this.isTouch = false
        this.$router.push({
          name: 'Receive'
        })
      }, 1500)
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.success {
  height: 100vh;
  background: #000 url('../assets/image/bg2.png') no-repeat top center;
  background-size: 100% 100%;
  position: relative;

  .home-top {
    width: 100%;
    height: 213px;
    transform: rotate(-180deg);
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
  .record-title {
    width: 324px;
    height: 50px;
    font-size: 36px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 50px;
    position: absolute;
    top: 144px;
    left: 214px;
  }
  .combined_main {
    width: 520px;
    height: 352px;
    position: absolute;
    left: 116px;
    top: 226px;
    background: url('../assets/image/success_bg.png') no-repeat center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 96px;
    box-sizing: border-box;
  }

  .record_success {
    width: 350px;
    height: 112px;
    /* margin-top: -50px; */
    margin-bottom: 34px;
    pointer-events: none;
  }
  .success_btn {
    position: absolute;
    width: 286px;
    height: 58px;
    background: url('../assets/image/success_btn.png') no-repeat center/cover;
    top: 50%;
    left: 50%;
    transform: translate(-45%, -50%);
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 58px;
  }
  .success-hinit {
    width: 288px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 45px;
  }
  .home-check__box {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 734px;
    left: 276px;
  }

  .check-main {
    width: 100%;
    height: 100%;
    background: url('../assets/image/Line2.png') no-repeat center/cover;
  }
  .check-main.active {
    transform-origin: center;
    animation: run 1s linear infinite;
  }
  .check {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 180px;
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
    pointer-events: none;
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
