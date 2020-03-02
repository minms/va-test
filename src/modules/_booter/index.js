import {getToken} from "../login/utils/auth-helper";

export default {
  weight: -1,
  register: (Vue) => {
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