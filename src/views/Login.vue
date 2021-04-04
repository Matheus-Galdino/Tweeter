<template>
  <div class="page login">
    <form>
      <img src="@/assets/tweeter.svg" alt="Tweeter logo" />

      <h1>Join now!</h1>

      <Input labelText="Email" inputType="email" v-model="email" />
      <Input labelText="Password" inputType="password" v-model="password" />

      <a href="#">Forgot password?</a>

      <button>Login</button>
      <button class="signup" @click.prevent="isSigningUp = true">
        Sign up
      </button>
    </form>

    <Mask v-show="isSigningUp">
      <Signup />
    </Mask>
  </div>
</template>

<script lang="ts">
import Mask from "@/components/Mask.vue";
import Input from "@/components/Input.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  components: { Input, Mask },
  data() {
    return {
      email: "",
      password: "",
      isSigningUp: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;

  padding: 0 2rem;
}

form {
  width: 100%;
  padding: 3rem 2rem 3rem;
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
  display: inline-block;

  color: #2f80ed;
  margin: 1rem 0 2rem;
  font-size: 1.4rem;
  text-decoration: none;
}

button {
  display: inline-block;

  width: 100%;
  max-width: 400px;

  padding: 1.5rem;
  font-size: 1.4rem;

  border: none;
  border-radius: 7px;

  color: #fff;
  background: #2f80ed;
  border: 1px solid #2f80ed;

  &:hover {
    background: #105bbc;
  }
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

