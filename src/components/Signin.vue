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
    >Sign in</h1>
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
          for="email"
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
          Enter your email address :
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
          id="email"
          placeholder="Ex: jane@example.com"
          v-model="formValues.email"
        >
        <p
          class=
          "
            text-center
            text-red-700
            mt-2
          "
        >
          {{ errorMessageArray.errorMessageEmail }}
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
          Confirm your password :
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
            id="confirmedPassword"
            placeholder="Ex: xyz"
            v-model="formValues.confirmedPassword"
          >
          <span
            v-if="confPwdState === false"
            @click="toggleConfPwd"
            class=
            "
              bg-red-500
              px-3
              py-2
              ml-1
              cursor-pointer
            "
          >
            Show
          </span>
          <span
            v-else
            @click="toggleConfPwd"
            class=
            "
              bg-red-500
              px-3
              py-2
              ml-1
              cursor-pointer
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
          {{ errorMessageArray.errorMessageConfirmedPassword }}
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
          cursor-pointer
        "
      >Sign up</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Signin',
  data() {
    return {
      formValues: {
        id: '',
        email: '',
        username: '',
        password: '',
        confirmedPassword: '',
      },
      errorMessageArray: {
        errorMessageEmail: '',
        errorMessageUsername: '',
        errorMessagePassword: '',
        errorMessageConfirmedPassword: '',
      },
      pwdState: false,
      confPwdState: false,
    };
  },
  methods: {
    ...mapMutations(['createUser']),
    randomNb() {
      this.formValues.id = Math.random() * 100;
    },
    submitFormValues(event) {
      event.preventDefault();

      this.clearErrorMessage();

      let submitOk = false;

      if (submitOk === false) {
        // Check email errors
        if (this.formValues.email === '') {
          this.errorMessageArray.errorMessageEmail = 'You need to enter an email address.';
        } else if (!this.formValues.email.includes('@')) {
          this.errorMessageArray.errorMessageEmail = 'You need to enter a valid email address.';
        }

        // Check username errors
        if (this.formValues.username === '') {
          this.errorMessageArray.errorMessageUsername = 'You need to enter a username.';
        }

        // Check password errors
        if (this.formValues.password === '') {
          this.errorMessageArray.errorMessagePassword = 'You need to enter a password.';
        } else if (this.formValues.password.length < 6) {
          this.errorMessageArray.errorMessagePassword = 'Password must be at least 6 characters.';
        }

        // Check password errors
        if (this.formValues.password !== this.formValues.confirmedPassword) {
          this.errorMessageArray.errorMessageConfirmedPassword = 'Passwords don\'t match.';
        }

        console.log('submitOk === false', submitOk);

        if (
          this.errorMessageArray.errorMessageEmail === '' && this.errorMessageArray.errorMessageUsername === '' && this.errorMessageArray.errorMessagePassword === '' && this.errorMessageArray.errorMessageConfirmedPassword === ''
        ) {
          // For id (randomize an id nb)
          this.randomNb();

          // Add user's infos to vueX
          this.createUser(this.formValues);

          submitOk = true;

          console.log('error message empty', submitOk);

          // Redirect to the login page
          this.$router.push('login');
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
    toggleConfPwd() {
      const passwordField = document.getElementById('confirmedPassword');

      this.confPwdState = !this.confPwdState;

      if (this.confPwdState === true) {
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
