import NProgress from "nprogress"

export default {
  weight: -1,
  register: (Vue) => {
    /** 添加加载动画 */
    import("nprogress/nprogress.css");
    /**
     * 拦截请求, 添加Header
     */
    Vue.prototype.$http.interceptors.request.use(
      config => {
        NProgress.start();
        return config
      },
      error => {
        NProgress.done()
        // do something with request error
        return Promise.reject(error)
      }
    )
    /**
     * 添加HTTP响应处理
     */
    Vue.prototype.$http.interceptors.response.use(
      response => {
        NProgress.done();
        return response;
      },
      error => {
        NProgress.done()
        return Promise.reject(error)
      }
    )
  }
}