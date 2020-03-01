export default {
  weight: 1,

  register: () => {

  },

  routers: [{
    path: '/task',
    name: 'Task',
    component: () => import("./pages/index"),
    meta: {title: '任务列表', icon: 'el-icon-eleme'}
  }],
}