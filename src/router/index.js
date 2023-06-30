import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import axios from '@/axios/request'
import HomeView from '@/views/HomeView.vue'
import Header from '@/views/HomeView/HeaderView.vue'
// import   from 
import Default from '@/views/HomeView/DefaultView.vue'
import OrderManagement from '@/views/HomeView/OrderManagement.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "loginView" */ '../views/Login/login.vue')
  },
  {
    path: '/home',
    name: 'home',
    //添加权限访问，表示只有登录之后才能进行该操作
    meta: {
      requireAuth: true
    },
    components: {
      default: HomeView,
      Header
    },
    redirect: "/Default",
    children: [//里面路由配置基本一样,可以无限children
      {
        path: '/Default',
        component: Default,
      },
      {
        path: '/OrderManagement',
        name: OrderManagement,
        component: OrderManagement,
      },
      {
        path: '/system',
        name: 'system',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/systemManagementView.vue'),
      },
      {
        path: '/arguments',
        name: 'arguments',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/ArgumentsView.vue'),
      },
      {
        path: '/data',
        name: 'data',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/ShowDataView.vue'),
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/UserListView.vue'),
      }, {
        path: '/MenuList',
        name: 'MenuList',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/MenuView.vue'),
      }, {
        path: '/roleList',
        name: 'roleList',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/RoleListView.vue'),
      }, {
        path: '/photo',
        name: 'photo',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/PhotoView.vue'),
      }, {
        path: '/video',
        name: 'video',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/VideoView.vue'),
      },
      {
        path: '/music',
        name: 'music',
        component: () => import(/* webpackChunkName: "us" */ '@/views/HomeView/MusicView.vue'),
      }
    ]
  },
  {
    path: '/supplierAllBack',
    name: 'supplierAllBack',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "loginView" */ '../components/supplierAllBack.vue')
  },


]

const router = new VueRouter({
  routes
})
// 全局守卫: 前置守卫(在路由跳转之前进行判断)
// router.beforeEach((to, from, next) => {
//   if (store.state.user.username == '') {
//     next('/')
//   }
//   else {
//     next()
//   }
// })
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆,未登录自动跳转出去
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
  } else {
    let token = store.state.user.token;
    // 验证token
    axios.get("api/validate?token=" + token)
      .then(res => {
        if (res.data.status == '404') {
          next('/');
        } else {
          next();
        }
      }).catch(error => {
        next('/');
      });
  }
});
//添加以下代码
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
