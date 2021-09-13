import Vue from 'vue';
import Vuex from 'vuex';
import auth from '@/store/auth';
import book from '@/store/book';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    book,
  },
});
