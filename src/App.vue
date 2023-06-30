<template>
  <div id="app" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <router-view name="Header" />
    <router-view v-if="isShow" />
  </div>
</template>
<script>
export default {
  name: 'App',
  // provide全局刷新
  provide() {
    return {
      reload: this.reload,
    }
  },
  data() {
    return {
      isShow: true,
      loading: true,
    }
  },
  methods: {
    reload() {
      this.isShow = false;
      this.$nextTick(() => {
        // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM
        this.isShow = true
      })
    }
  },
  watch: {

  },
  beforeCreate() {

  },
  mounted() {
    this.loading = false
  }
}
</script>
<style>
html,
body {
  width: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  widows: 100%;
  height: 100%;
  background-color: rgb(84, 92, 100);
  color: rgb(255, 255, 255);
}
</style>
