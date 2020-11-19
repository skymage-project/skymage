import Vue from 'vue';
import Vuex from 'vuex';
import userAuth from '../service/user.service';
Vue.use(Vuex);
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };
export default new Vuex.Store({
  state: {
    initialState,
  },
  mutations: {
    loginSuccess(state, user) {
      state.initialState.status.loggedIn = true;
      state.initialState.user = user;
    },
    loginFailure(state) {
      state.initialState.status.loggedIn = false;
      state.initialState.user = null;
    },
  },
  actions: {
    
    login({ commit }, user) {
      return userAuth.login(user).then(
        user => {
          commit('loginSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('loginFailure');
          return Promise.reject(error);
        }
      );
    },
  },

  modules: {
  },
});
