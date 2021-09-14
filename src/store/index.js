import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      user: {
        id: '',
        email: '',
        username: '',
        password: '',
      },
    };
  },
  mutations: {
    createUser(state, userinfos) {
      console.log(state, userinfos);
    },
  },
  actions: {
  },
  modules: {
  },
});
