<template>
  <div
    id="nav"
    class=
      "
        bg-gray-800
        font-semibold
        flex
        justify-end
        mb-8
        text-lg
      "
  >
    <router-link
      to="/"
      class=
      "
        router-link
        text-gray-200
        m-4
        cursor-pointer
      "
    >
      Sign in
    </router-link>
    <router-link
      to="/profil" class="router-link text-gray-200 m-4 cursor-pointer"
      v-if="$store.state.loggedIn === true"
    >
      My profil
    </router-link>
    <router-link
      to="/login" class="router-link text-gray-200 m-4 cursor-pointer"
      v-if="$store.state.loggedIn === false"
    >
      Login
    </router-link>
    <router-link
      to="/login" class="router-link text-gray-200 m-4 cursor-pointer"
      v-else
      @click="logout"
    >
      Logout
    </router-link>
  </div>
  <router-view/>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  methods: {
    ...mapMutations(['logOutUser']),
    logout() {
      this.logOutUser();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Glory', sans-serif;
}

.router-link {
  font-family: 'Glory', sans-serif;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #EF4444;
}
</style>
