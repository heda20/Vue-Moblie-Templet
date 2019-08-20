<template>
  <div class="receive">
    <!-- <img src="../assets/image/top_bg.png" class='home-top' alt="img"> -->
    <div class="top_left">
      <img src="../assets/image/Triangle2.png" alt="img" />
      <img src="../assets/image/happiness2.png" alt="img" />
    </div>
    <img src="../assets/image/home_right.png" class="home_right" alt="img" />
    <img src="../assets/image/keyhappine2.png" class="key" alt="img" />
    <div class="combined_main"></div>
    <div class="gift_box"></div>
    <div class="gift_text">
      <span>感谢您的参与</span>
      <p>请前往签到礼品兑换处</p>
      <span>领取签到礼品</span>
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
      this.isTouch = false
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.receive {
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
    width: 390px;
    height: 100px;
    position: absolute;
    left: 180px;
    top: 251px;
    background: rgba(255, 242, 214, 0.29)
      url('../assets/image/check_success.png') no-repeat center/cover;
    border-radius: 110px;
    border: 1px solid rgba(255, 245, 198, 1);
  }
  .gift_box {
    width: 268px;
    height: 268px;
    position: absolute;
    left: 241px;
    top: 437px;
    background: url('../assets/image/gift.png') no-repeat center/cover;
  }
  .gift_text {
    width: 320px;
    height: 168px;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 56px;
    text-align: center;
    position: absolute;
    left: 216px;
    top: 744px;
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
    background: url('../assets/image//success_btn.png') no-repeat center/cover;
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
    animation: rotate_name 1s ease-in infinite;
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

  @keyframes rotate_name {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
