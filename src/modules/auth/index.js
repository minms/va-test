import {getToken} from "./utils/auth-helper";

export default {
  weight: 0,

  register: (Vue, router, store, name) => {
    router.beforeEach(async (to, from, next) => {
      if (to.name === 'Login') {
        /** 取消模板 */
        // store.dispatch('app/layout', false);
        return next();
      }

      if (!getToken()) {
        return next({name: 'Login', replace: true});
      }

      next();
    });
  },

  routers: [{
    path: 'login',
    name: 'Login',
    component: () => import("./pages/login")
  }],

  store: {
    namespaced: true,
    state: {
      count: 0,
      token: getToken()
    },
    mutations: {
      increment(state) {
        // `state` is the local module state
        state.count++
      }
    },
    getters: {
      doubleCount(state) {
        return state.count * 2
      }
    }
  }
}