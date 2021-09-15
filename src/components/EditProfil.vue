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
    >Edit your informations</h1>
    <form
      class="xl:w-1/3 md:w-1/2 p-4 my-0 mx-auto"
      action=""
      @submit="submitFormValues"
    >
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
        <input
          type="text"
          class=
          "
            border-2
            border-gray-800
            focus:border-red-500
            text-2xl
            text-gray-800
            font-medium
            title-font
            w-full
            text-center
          "
          id="username"
          :placeholder="user.username"
          v-model="formValues.username"
        />
        <p
          class=
          "
            text-center
            text-red-700
            mt-2
            mb-4
          "
        >
          {{ errorMessageArray.errorMessageUsername }}
        </p>
        <input
          type="text"
          class=
          "
            border-2
            border-gray-800
            focus:border-red-500
            text-2xl
            text-gray-800
            font-medium
            title-font
            w-full
            text-center
          "
          id="email"
          :placeholder="user.email"
          v-model="formValues.email"
        />
        <p
          class=
          "
            text-center
            text-red-700
            mt-2
            mb-4
          "
        >
          {{ errorMessageArray.errorMessageEmail }}
        </p>
      </div>
      <div
        class=
          "
            px-4
            py-2
            mx-auto
            text-center
          "
        >
        <button
          type="submit"
          class=
          "
            bg-green-400
            hover:bg-green-500
            px-4
            py-2
            mx-2
            text-gray-800
          "
        >
          Save my changes
        </button>
        <router-link to="/profil">
          <button
            class=
            "
              bg-gray-800
              hover:bg-red-500
              px-4
              py-2
              my-4
              text-gray-200
            "
          >
            Go back to profil
          </button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'EditProfil',
  data() {
    return {
      formValues: {
        username: '',
        email: '',
      },
      errorMessageArray: {
        errorMessageUsername: '',
        errorMessageEmail: '',
      },
    };
  },
  computed: {
    ...mapState(['user', 'loggedIn']),
  },
  methods: {
    ...mapMutations(['updateUser']),
    submitFormValues(event) {
      event.preventDefault();

      this.clearErrorMessage();

      let submitOk = false;

      if (submitOk === false) {
        // Check username errors
        if (this.formValues.username === '') {
          this.errorMessageArray.errorMessageUsername = 'You need to enter a username.';
        }

        if (this.formValues.email === '') {
          this.errorMessageArray.errorMessageEmail = 'You need to enter an email adress.';
        } else if (!this.formValues.email.includes('@')) {
          this.errorMessageArray.errorMessageEmail = 'You need to enter a valid email address.';
        }

        if (
          this.errorMessageArray.errorMessageUsername === ''
          && this.errorMessageArray.errorMessageEmail === ''
        ) {
          submitOk = true;

          console.log('Update ok', submitOk);

          this.updateUser(this.formValues);

          // Redirect to the login page
          this.$router.push('/profil');
        }
      }
    },
    clearErrorMessage() {
      this.errorMessageArray.errorMessageEmail = '';
      this.errorMessageArray.errorMessageUsername = '';
      this.errorMessageArray.errorMessagePassword = '';
      this.errorMessageArray.errorMessageConfirmedPassword = '';
    },
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
