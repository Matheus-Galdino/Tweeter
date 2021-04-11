<template>
  <div class="page login">
    <form @submit.prevent="login">
      <img src="@/assets/tweeter.svg" alt="Tweeter logo" />

      <h1>Join now!</h1>

      <Input
        labelText="Email"
        inputType="email"
        v-model="user.email"
        v-model:valid="validations.email"
        :required="true"
      />
      <Input
        labelText="Password"
        inputType="password"
        v-model="user.password"
        v-model:valid="validations.password"
        :required="true"
      />

      <a href="#">Forgot password?</a>

      <button
        @click.prevent="login"
        :disabled="!validations.email || !validations.password"
      >
        Login
      </button>
      <button class="signup" @click.prevent="isSigningUp = true">
        Sign up
      </button>
    </form>

    <Mask v-show="isSigningUp">
      <Signup @close="isSigningUp = false" />
    </Mask>
  </div>
</template>

<script lang="ts">
import AuthApi from "@/API/AuthApi";
import User from "@/models/User";

import Mask from "@/components/Mask.vue";
import Input from "@/components/Input.vue";
import Signup from "@/components/Signup.vue";

import { defineComponent } from "vue";
import router from "@/router";
import store from "@/store";

export default defineComponent({
  name: "Login",
  components: { Input, Mask, Signup },
  data() {
    return {
      user: {
        email: "",
        password: "",
      } as User,
      validations: {
        email: null,
        password: null,
      },
      isSigningUp: false,
    };
  },
  methods: {
    async login() {
      const api = new AuthApi();
      const token = await api.Login(this.user);

      // if(rememberMe){
      // localStorage.setItem("token", token.value);
      //  localStorage.setItem(
      //    "token_expires",
      //    new Date(token.expires).toUTCString()
      //  );
      //   }

      store.commit("setToken", token.value);
      router.push("/feed");
    },
  },
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
}

form {
  width: 100%;
  padding: 3rem 2rem;
  text-align: center;

  border-radius: 15px;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);
}

img {
  display: none;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #105bbc;
}

a {
  display: block;

  color: #2f80ed;
  margin: 1rem 0 2rem;
  font-size: 1.4rem;
  text-decoration: none;
}

.signup {
  margin-top: 1.5rem;
  color: #2f80ed;
  background: #fff;

  &:hover {
    font-weight: 700;
    color: #105bbc;
    background: #fff;
    border-color: #105bbc;
  }
}
</style>

