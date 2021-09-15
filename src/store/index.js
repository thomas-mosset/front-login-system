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
      loggedIn: false,
    };
  },
  mutations: {
    createUser(state, userinfos) {
      // Assign the received values to the state
      state.user.id = userinfos.id;
      state.user.email = userinfos.email;
      state.user.username = userinfos.username;
      state.user.password = userinfos.password;

      // console.log('state', state.user);
    },
    updateUser(state, userinfos) {
      console.log('state', state.user, userinfos);

      state.user.email = userinfos.email;
      state.user.username = userinfos.username;
    },
    loginUser(state, userinfos) {
      console.log(state, userinfos);

      state.loggedIn = true;
    },
    logOutUser(state) {
      state.loggedIn = false;
      this.$router.push('login');
    },
  },
  actions: {
  },
  modules: {
  },
});
