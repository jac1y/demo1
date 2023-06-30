<template>
  <el-container>
    <!-- aside -->
    <el-aside :style="isCollapse ? 'width: 64px' : 'width:200px'">
      <h5 @click="isCollapse = !isCollapse"><i class="el-icon-s-fold"></i></h5>
      <el-menu :collapse="isCollapse" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true" :unique-opened="true">
        <el-submenu v-if="item.children != null" v-for="(item, index1) in asideList" :key="item.path" :index="item.title">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </template>
          <el-menu-item-group v-if="child1.children != null" v-for="(child1, index2) in item.children" :key="child1.path">
            <el-submenu :index="child1.title">
              <template slot="title">
                <i :class="child1.icon"></i>
                <span slot="title">{{ child1.title }}</span>
              </template>
              <el-menu-item-group v-for="(child2, index3) in child1.children" :key="child2.path">
                <el-menu-item :index="child2.path" @click="addTab(child2)">
                  <i :class="child2.icon"></i>
                  <span>{{ child2.title }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu-item-group>
          <el-menu-item v-else :index="child1.path" @click="addTab(child1)">
            <i :class="child1.icon"></i>
            <span slot="title">{{ child1.title }}</span>
          </el-menu-item>
        </el-submenu>

        <el-menu-item v-else :index="item.path" @click="addTab(item)">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.title }}</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <!-- main -->
    <el-main class="main">
      <el-tabs v-model="editableTabsValue" type="card" @tab-remove="removeTab" @tab-click="clickTabs" v-if="isShow">
        <el-tab-pane v-for="(item, index) in editableTabs" :key="index" :label="item.title" :name="item.name"
          :closable="item.close">
        </el-tab-pane>
      </el-tabs>
      <router-view :argumentsArry="argumentsArry" :userList="userList" :asideList="asideList"></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      test: 1,
      // aside
      isCollapse: false,
      asideList: [
        {
          id: 1,
          icon: "el-icon-s-home",
          title: "首页",
          path: "/home",
        },
        {
          id: 2,
          icon: "el-icon-menu",
          title: "系统管理",
          children: [
            {
              id: 1 - 1,
              icon: "el-icon-data-line",
              title: "操作日志",
              path: "system",
            },
            {
              id: 1 - 2,
              icon: "el-icon-notebook-2",
              title: "在线管理员",
              path: "arguments",
            },
            {
              id: 1 - 3,
              icon: "el-icon-lock",
              title: "权限管理",
              children: [
                {
                  id: 1 - 3 - 1,
                  icon: "el-icon-notebook-2",
                  title: "用户权限",
                  path: "userList",
                },
                {
                  id: 1 - 3 - 2,
                  icon: "el-icon-notebook-2",
                  title: "菜单列表",
                  path: "MenuList",
                },
                {
                  id: 1 - 3 - 3,
                  icon: "el-icon-notebook-2",
                  title: "管理员权限",
                  path: "roleList",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          icon: "el-icon-truck",
          title: "订单管理",
          path: "OrderManagement",
        },
        {
          id: 4,
          icon: "el-icon-s-data",
          title: "数据图",
          path: "data",
        },
        {
          id: 5,
          icon: "el-icon-picture",
          title: "媒体管理",
          children: [
            {
              id: 5 - 1,
              icon: "el-icon-picture-outline",
              title: "视频列表",
              children: [
                {
                  id: 5 - 1 - 1,
                  icon: "el-icon-picture-outline",
                  title: "A类视频",
                  path: "video",
                }
              ]
            },
            {
              id: 5 - 2,
              icon: "el-icon-video-play",
              title: "图片列表",
              children: [
                {
                  id: 5 - 2 - 1,
                  icon: "el-icon-picture-outline",
                  title: "A类图片",
                  path: "photo",
                }
              ]
            },
            {
              id: 5 - 3,
              icon: "el-icon-video-play",
              title: "音频列表",
              children: [
                {
                  id: 5 - 3 - 1,
                  icon: "el-icon-picture-outline",
                  title: "A类音频",
                  path: "music",
                }
              ]
            },
          ],
        },
      ],
      // addTab
      editableTabsValue: this.$store.state.tabs.editableTabsValue,
      editableTabs: this.$store.state.tabs.editableTabs,
      tabIndex: this.$store.state.tabs.tabIndex,

      // 局部刷新
      isShow: true,
      // arguments  URL
    };
  },
  inject: ["reload"],
  //父组件通过provide向子组件传递数据，子组件通过inject获取数据。
  // 那么$nextTick又是干哈的呢？
  // $nextTick 又说是Vue的另一个生命周期函数：当你修改完数据（数据更新了）之后，Vue帮你操作完DOM之后，把真实的DOM放入页面了（Dom更新渲染），Vue再帮我们调用这个函数（可以监听DOM元素被修改后，在该函数中写你要执行的逻辑）。
  methods: {
    // aside
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // addTab
    addTab(targetName) {
      this.$store.commit("tabs/addTab", targetName);
    },
    // removeTabs
    removeTab(targetName) {
      this.$store.commit("tabs/removeTab", targetName);
      // 全局刷新
      this.reload();
    },
    // ...mapActions(["tabs/addTab"]),
    clickTabs(item) {
      this.$router.push(this.editableTabs[item.index].to);
    },
    // 全局刷新1
    reload1(path) {
      this.$store.commit("getPath", path);
      this.$router.push("/supplierAllBack");
    },
    // 局部刷新
    // reload3() {
    //   this.isShow = false;
    //   this.$nextTick(() => {
    //     this.isShow = true
    //   })
    // },
  },
  watch: {},
  beforeCreate() { },
  created() {

  },
  beforeMount() { },
  mounted() {

  },
};
</script>
<style scoped>
.el-aside {
  width: 200px;
  overflow: hidden;
}

.el-submenu .el-menu-item {
  min-width: 100px;
}

.el-aside h5 {
  text-align: center;
}

.main {
  height: 800px;
}

::v-deep .el-pagination__total {
  color: rgb(255, 255, 255);
}

::v-deep .el-pagination__jump {
  color: rgb(255, 255, 255);
}

::v-deep .el-table {
  color: rgb(255, 255, 255);
}

::v-deep .el-table__body-wrapper {
  color: rgb(255, 255, 255);
  background-color: rgb(84, 92, 100);
}

::v-deep .el-table__fixed-right-patch {
  background-color: rgb(84, 92, 100);
}

::v-deep .el-table th.el-table__cell {
  background-color: rgb(84, 92, 100);
}
</style>
