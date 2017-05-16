import Vue from 'vue';
import Vuex from 'vuex';
import mail from './../modules/mail/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    mail,
  },
  strict: debug,
});
