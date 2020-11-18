import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  mutations: {
    SET_DRAWER: (state, v)=>{
      state.drawer = v;
    }
  },
  actions: {
    OPEN_DRAWER: (context)=>{
      context.commit('SET_DRAWER', true);
    }
  },
  modules: {
  },
});
