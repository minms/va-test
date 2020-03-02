export default {
  weight: 100,

  register: () => {

  },

  routers: [{
    path: '/',
    name: 'Dashboard',
    component: () => import("./pages/index"),
    meta: {title: '控制台', icon: 'el-icon-dish-1'}
  }],
}