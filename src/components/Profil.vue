<template>
  <div class="my-28 mx-auto">
    <h1
    class=
      "
        text-center
        text-3xl
        uppercase
        text-gray-800
        mb-8
      "
    >Your informations</h1>
    <div class="xl:w-1/3 md:w-1/2 p-4 my-0 mx-auto">
      <div
        class=
        "
          border-2
          border-red-500
          p-6
          rounded-lg
        "
      >
        <img
          class=
          "
            lg:h-60
            xl:h-56
            md:h-64
            sm:h-72
            xs:h-72
            h-72
            rounded
            w-full
            object-cover
            object-center
            mb-6
          "
          :src="user.picture"
          :alt="user.username"
        >
        <h2
          class=
          "
            text-2xl
            text-gray-800
            font-medium
            title-font
            mb-4
            text-center
          "
        >{{ user.username }}</h2>
        <p class="leading-relaxed text-center">
          {{ user.email }}
        </p>
      </div>
      <router-link to="/profil/edit">
        <button
          type="submit"
          class=
          "
            bg-gray-800
            hover:bg-red-500
            px-4
            py-2
            my-4
            mx-auto
            text-gray-200
          "
        >Edit my infos</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Profil',
  computed: {
    ...mapState(['user']),
  },
  beforeCreate() {
    // If !loggedIn then redirection to login page
    if (this.$store.state.loggedIn === false) {
      this.$router.push('/login');
      console.log('create()', this.$store.state.loggedIn);
    }
  },
};
</script>

<style>

</style>
