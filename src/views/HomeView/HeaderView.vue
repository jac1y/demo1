<template>
  <el-header>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
      background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">菜单列表1</template>
        <el-menu-item index="/">菜单1</el-menu-item>
        <el-menu-item index="/">菜单2</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">菜单列表2</template>
          <el-menu-item index="/">菜单1</el-menu-item>
          <el-menu-item index="/">菜单2</el-menu-item>
          <el-menu-item index="/">菜单3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/">菜单</el-menu-item>
      <el-menu-item @click="openMusic()">背景音乐<i class="el-icon-turn-off" v-show="!flag"></i> <i class="el-icon-open"
          v-show="flag"></i>《起风了》</el-menu-item>
      <audio controls id="music" v-show="false" autoplay loop>
        <source src="@/utils/music/买辣椒也用券 - 起风了.mp3" type="audio/mp3">
        您的浏览器不支持 audio 元素。
      </audio>
      <el-submenu index="4" class="user">
        <template slot="title">
          <el-avatar :siz="40" :src="circleUrl"></el-avatar>
        </template>
        <el-menu-item @click="handleClick">个人中心</el-menu-item>
        <el-menu-item @click="outLogin">退出</el-menu-item>
      </el-submenu>
      <!-- 消息中心 -->
      <el-menu-item index="/" class="user"><i class="el-icon-bell"></i></el-menu-item>
    </el-menu>
    <template>
      <el-dialog title="新增" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" center modal>
        <div style="margin: 20px;"></div>
        <!-- 表单格式 -->
        <el-descriptions class="margin-top" title="个人中心" :column="3" :size="size">
          <template slot="extra">
            <el-button type="primary" size="small" @click="innerVisible = true">操作</el-button>
          </template>
          <el-descriptions-item label="昵称">{{ user[0].username }}</el-descriptions-item>
          <el-descriptions-item label="角色">{{ user[0].role }}</el-descriptions-item>
          <el-descriptions-item label="ip地址">北京</el-descriptions-item>
          <el-descriptions-item label="备注">
            <el-tag size="small">{{ user[0].role }}</el-tag>
          </el-descriptions-item>
        </el-descriptions>
        <el-dialog width="30%" title="修改密码" :visible.sync="innerVisible" append-to-body>
          <el-form label-width="80px">
            <el-form-item label="新密码">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="再次操作">
              <el-input></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">修改</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-dialog>
    </template>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      // header
      activeIndex: "1",
      circleUrl: "https://img1.baidu.com/it/u=2813244786,1601782772&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=590",
      dialogVisible: false,
      user: this.$store.state.user.user,
      innerVisible: false,
      flag: true
    };
  },
  methods: {
    // header
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    outLogin() {
      this.$store.commit('user/clearUser');
      // 清除浏览器的cookie
      // const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
      // if (keys) {
      //   for (var i = keys.length; i--;)
      //     document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
      // }
      // 删除本地存储
      // sessionStorage.clear();
      this.$router.push('/');
    },
    handleClick() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    openMusic() {
      const music = document.getElementById('music')
      if (this.flag) {
        music.pause();
        this.flag = !this.flag;
      }
      else {
        music.play();
        this.flag = !this.flag;
      }
    }
  },
};
</script>
<style scoped>
/* header */
.el-header {
  padding: 0;
}

.user {
  float: right;
}
</style>
