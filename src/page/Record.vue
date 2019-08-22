<template>
  <div class="record">
    <!-- <img src="../assets/image/top_bg.png" class='home-top' alt="img"> -->
    <div class="top_left">
      <img src="../assets/image/Triangle2.png" alt="img" />
      <img src="../assets/image/happiness2.png" alt="img" />
    </div>
    <img src="../assets/image/home_right.png" class="home_right" alt="img" />
    <img src="../assets/image/keyhappine2.png" class="key" alt="img" />
    <p class="record-title">说出您的幸福关键词</p>
    <div class="combined_main">
      <img src="../assets/image/bo.png" class="line" v-show="!isTouch" alt="" />
      <img
        src="../assets/image/audio.gif"
        class="gif"
        v-show="isTouch"
        alt="gif"
      />
    </div>
    <!-- <img src="../assets/image/combined.png" class="combined_main" alt="img"> -->
    <div class="home-check__box" :class="isTouch ? 'active' : ''">
      <div
        class="check-main"
        @touchstart="touchStart"
        @touchend="touchEnd"
        :class="isEnd ? 'active' : ''"
      ></div>
    </div>
    <span class="check">{{ isTouch ? '松开完成录入' : '长按录入' }}</span>
    <img src="../assets/image/home_top.png" class="home_bg" alt="img" />
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
import { setTimeout } from 'timers'
export default {
  name: 'HelloWorld',
  data() {
    return {
      isTouch: false,
      statTime: 0,
      endTime: 0,
      isEnd: false
    }
  },
  methods: {
    touchStart() {
      this.isTouch = true
      this.statTime = new Date().getTime()
    },
    touchEnd() {
      this.isTouch = false
      this.endTime = new Date().getTime()
      let time = this.endTime - this.statTime
      if (time >= 1000) {
        this.isEnd = true
        setTimeout(() => {
          this.$router.push({
            name: 'Success'
          })
        }, 1000)
      } else {
        this.$vux.toast.text('太快啦')
      }
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.record {
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
    // width: 324px;
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
    width: 530px;
    height: 608px;
    position: absolute;
    left: 110px;
    top: 224px;
    background: url('../assets/image/combined.png') no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .gif {
    width: 530px;
    height: 608px;
  }
  .line {
    width: 404px;
    height: 404px;
    margin-top: -90px;
  }
  .home-check__box {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 734px;
    left: 276px;
    text-align: center;
    line-height: 200px;
    text-decoration: none;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    border-radius: 50%;
  }

  .home-check__box:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    border-radius: 50%;
  }

  .home-check__box.active {
    transform: scale(0.9);
    top: 740px;
  }
  .home-check__box.active:after {
    transform: scale(0, 0);
    animation: identifier 0.5s linear infinite;
  }
  .check-main {
    width: 100%;
    height: 100%;
    background: url('../assets/image/record.png') no-repeat center/cover;
    &.active {
      pointer-events: none;
      touch-action: none;
    }
  }
  .check {
    width: 200px;
    height: 45px;
    position: absolute;
    top: 952px;
    left: 276px;
    z-index: 2;
    font-size: 32px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 213, 127, 1);
    text-align: center;
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
  @keyframes identifier {
    0% {
      opacity: 0;
      transform: scale(0, 0);
    }
    50% {
      opacity: 0.1;
      transform: scale(10, 10);
    }
    100% {
      opacity: 0;
      transform: scale(0, 0);
    }
  }
}
</style>
