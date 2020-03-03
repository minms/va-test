export default {
  weight: -100,
  register: (Vue) => {
    /** 导入应用样式 */
    import("../../assets/app.less");
    /**
     * 调整Element默认参数
     * @type {{size: string, zIndex: number}}
     */
    Vue.prototype.$ELEMENT = {size: 'small', zIndex: 3000};
    /**
     * 拦截请求, 添加Header
     */
    Vue.prototype.$http.interceptors.request.use(
      config => {
        // do something before request is sent
        config.headers['Content-type'] = 'application/json'
        return config
      },
      error => {
        // do something with request error
        return Promise.reject(error)
      }
    )
    /**
     * 添加HTTP响应处理
     */
    Vue.prototype.$http.interceptors.response.use(
      response => {
        let data = response.data;
        if (data.code !== 1) {
          /** element Message组件 */
          Vue.prototype.$message.error(data.msg || data.message)
          return data;
        }

        return data
      },
      error => {
        return Promise.reject(error)
      }
    )
  }
}