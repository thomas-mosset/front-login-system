<template>
  <div>
    <h1
    class=
      "
        text-center
        text-3xl
        uppercase
        text-gray-800
        mb-8
      "
    >Login</h1>
    <form
      action=""
      @submit="submitFormValues"
      class=
      "
        flex
        flex-wrap
        border-2
        border-red-500
        w-3/4
        md:w-4/5
        lg:w-3/4
        xl:w-2/4
        2xl:w-2/4
        my-0
        mb-8
        mx-auto
        py-4
      "
    >
      <fieldset
        class=
          "
            flex
            w-full
            p-4
          "
      >
        <label
          for="username"
          class=
          "
              text-gray-200
              font-semibold
              bg-red-500
              py-4
              my-8
              text-center
          "
        >
          Enter your username :
        </label>
        <input
          type="text"
          class=
          "
            border-2
            border-gray-800
            focus:border-red-500
            my-0
            mx-auto
            w-2/5
          "
          id="username"
          placeholder="Ex: SuperDev"
          v-model="formValues.username"
        >
        <p
          class=
          "
            text-center
            text-red-700
            mt-2
          "
        >
          {{ errorMessageArray.errorMessageUsername }}
        </p>
      </fieldset>
      <fieldset
        class=
        "
            flex
            w-full
            p-4
        "
      >
        <label
          for="password"
          class=
          "
              text-gray-200
              font-semibold
              bg-red-500
              py-4
              my-8
              text-center
          "
        >
          Enter your password :
        </label>
        <div
          class=
          "
            my-0
            mx-auto
            sm:w-2/5
          "
        >
          <input
            type="password"
            class=
            "
              border-2
              border-gray-800
              focus:border-red-500
              my-0
              mx-auto
              sm:w-4/5
              md:w-3/4
            "
            id="password"
            placeholder="Ex: xyz"
            v-model="formValues.password"
          >
          <span
            v-if="pwdState === false"
            @click="togglePwd"
            class=
            "
              bg-red-500
              px-3
              py-2
              ml-1
              cursor-pointer
              hover:bg-gray-800
              hover:text-gray-200
            "
          >
            Show
          </span>
          <span
            v-else
            @click="togglePwd"
            class=
            "
              bg-red-500
              px-3
              py-2
              ml-1
              cursor-pointer
              hover:bg-gray-800
              hover:text-gray-200
            "
          >
            Hide
          </span>
        </div>

        <p
          class=
          "
            text-center
            text-red-700
            mt-2
          "
        >
          {{ errorMessageArray.errorMessagePassword }}
        </p>
      </fieldset>
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
      >Sign up</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Signin',
  data() {
    return {
      formValues: {
        username: '',
        password: '',
      },
      errorMessageArray: {
        errorMessageUsername: '',
        errorMessagePassword: '',
      },
      pwdState: false,
    };
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapMutations(['loginUser']),
    submitFormValues(event) {
      event.preventDefault();

      this.clearErrorMessage();

      // console.log(this.$store.state.user);

      let submitOk = false;

      if (submitOk === false) {
        // Check username errors
        if (this.formValues.username === '') {
          this.errorMessageArray.errorMessageUsername = 'You need to enter a username.';
        } else if (this.formValues.username !== this.$store.state.user.username) {
          this.errorMessageArray.errorMessageUsername = 'The given username doesn\'t match any registered username.';
        }

        // Check password errors
        if (this.formValues.password === '') {
          this.errorMessageArray.errorMessagePassword = 'You need to enter a password.';
        }

        if (
          this.formValues.username === this.$store.state.user.username
          && this.formValues.password !== this.$store.state.user.password
        ) {
          this.errorMessageArray.errorMessagePassword = 'Password incorrect.';
        }

        if (
          this.errorMessageArray.errorMessageUsername === '' && this.errorMessageArray.errorMessagePassword === '' && this.formValues.username === this.$store.state.user.username && this.formValues.password === this.$store.state.user.password
        ) {
          submitOk = true;

          console.log('Login ok', submitOk);

          this.loginUser();

          // Redirect to the login page
          this.$router.push('profil');
        }
      }
    },
    // Toggle pwd state to show or hide the pwd to the client
    togglePwd() {
      const passwordField = document.getElementById('password');

      this.pwdState = !this.pwdState;

      if (this.pwdState === true) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    },
    clearErrorMessage() {
      this.errorMessageArray.errorMessageEmail = '';
      this.errorMessageArray.errorMessageUsername = '';
      this.errorMessageArray.errorMessagePassword = '';
      this.errorMessageArray.errorMessageConfirmedPassword = '';
    },
  },
};
</script>

<style>
</style>
