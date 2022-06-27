import Vue from 'vue';
import Vuex from 'vuex';

import layout from './layout';
import loginAndStoreId from './loginAndStoreId';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layout,
    loginAndStoreId
  },
});
