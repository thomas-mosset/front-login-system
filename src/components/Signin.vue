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
        my-0
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
export default {
  name: 'Signin',
  data() {
    return {
      formValues: {
        email: '',
        username: '',
        password: '',
      },
      errorMessageArray: {
        errorMessageEmail: '',
        errorMessageUsername: '',
        errorMessagePassword: '',
      },
      pwdState: false,
    };
  },
  methods: {
    submitFormValues(event) {
      event.preventDefault();

      if (this.formValues.email === '') {
        this.errorMessageArray.errorMessageEmail = 'You need to enter an email address.';
      }

      if (this.formValues.username === '') {
        this.errorMessageArray.errorMessageUsername = 'You need to enter a username.';
      }

      if (this.formValues.password === '') {
        this.errorMessageArray.errorMessagePassword = 'You need to enter a password.';
      }

      console.log('Values', this.formValues);
    },
    togglePwd() {
      const passwordField = document.getElementById('password');

      this.pwdState = !this.pwdState;

      if (this.pwdState === true) {
        passwordField.type = 'text';
      } else {
        passwordField.type = 'password';
      }
    },
  },
};
</script>

<style>
</style>
