<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import mixin from '@/mixins/mixin.js'
export default {
  name: 'App',
  components: {},
  mixins: [mixin],
  created() {
    this.getJssdkInfo()
  },
  methods: {}
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
