import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 2
  },
  // getters : vuexでのcomputedプロパティみたいなもの
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3
  },
  // mutations : データの予測や追跡をしやすくするために、
  //             vuexの値を変える場所
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    }
  },
  actions: {
    increment({ commit }, number) {
      commit('increment', number);
    },
    decrement({ commit }, number) {
      commit('decrement', number);
    }
  }
});
