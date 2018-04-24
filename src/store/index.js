import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import messages from '@/modules/messages/store';
import people from '@/modules/people/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    messages,
    people,
  },
  plugins: [createPersistedState({
    key: 'kazoo',
  })],
  strict: debug,
  state: {
    count: 0,
  },
  mutations: {
    updateCount(state, payload) {
      Vue.set(state, 'count', state.count + payload);
    },
  },
  getters: {
    getCount: state => state.count,
  },
  actions: {
    // initialize(state) {
    //   console.log(state);
    // },
    incrementCount(context) {
      context.commit('updateCount', 1);
    },
    decrementCount(context) {
      context.commit('updateCount', -1);
    },
  },
});
