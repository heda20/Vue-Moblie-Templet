<!--
 * @Description: 
 * @version: 0.0.1
 * @Company: Puredo
 * @Author: dada
 * @Date: 2019-08-09 10:52:11
 * @LastEditors: dada
 * @LastEditTime: 2019-08-09 11:12:16
 -->
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
    <div class="home-check__box">
      <span>长按二维码关注公众号</span>
      <p>领取签到礼品</p>
    </div>
    <div class="receive_btn" @click="goToRecord">
      已关注&nbsp;点击领取礼品
    </div>
    <img src="../assets/image/qr_code.png" class="code" alt="code" />
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
    goToRecord() {
      setTimeout(() => {
        this.isTouch = false
        this.$router.push({
          name: 'Receive'
        })
        // window.location.href =
        //   'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzg4MzE2MjE5MQ==&scene=124#wechat_redirect'
      }, 1000)
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
    top: 176px;
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

  .code {
    width: 250px;
    height: 250px;
    position: absolute;
    left: 250px;
    top: 593px;
  }
  .success-hinit {
    // width: 288px;
    height: 45px;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 45px;
  }
  .home-check__box {
    height: 200px;
    position: absolute;
    top: 834px;
    left: 235px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 28px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 40px;
    text-align: center;
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
  .receive_btn {
    height: 100px;
    min-width: 400px;
    line-height: 100px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    line-height: 100px;
    text-align: center;
    border-radius: 100px;
    position: absolute;
    top: 1000px;
    left: 50%;
    transform: translateX(-50%);
    background: url('../assets/image/btn_2.png') no-repeat center;
    background-size: 100%;
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
