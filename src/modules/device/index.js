export default {
  weight: 101,

  /**
   * 登录组件路由
   */
  routers: [{
    path: '/device',
    name: 'Device',
    component: () => import("./pages/index"),
    meta: {title: '设备管理', icon: 'el-icon-set-up'}
  }],

  /**
   * Store, 其他组件调用, 只能从this.$store里面取, 不能直接调用组件
   */
  store: {
    namespaced: true,
    state: {},
    mutations: {},
    getters: {}
  }
}