<template>
  <section class="signup">
    <span class="material-icons-outlined exit" @click="$emit('close')">
      clear
    </span>

    <div class="signup__header">
      <ul>
        <li :class="{ active: step > 1 }" @click="step = 1">1</li>
        <div :class="['connector', { active: step >= 1 }]">
          <div class="inner-bg"></div>
        </div>
        <li
          :class="{ active: step > 2 }"
          @click="if (validations.namee && validations.birthday) step = 2;"
        >
          2
        </li>
        <div :class="['connector', { active: step >= 2 }]">
          <div class="inner-bg"></div>
        </div>
        <li
          :class="{ active: step == 3 }"
          @click="if (validations.username && validations.email) step = 3;"
        >
          3
        </li>
      </ul>
    </div>

    <div class="signup__content">
      <section v-show="step == 1">
        <Input
          labelText="Name"
          :minLength="3"
          :maxLength="50"
          :required="true"
          :showCharCount="true"
          v-model="user.name"
          v-model:valid="validations.name"
        />

        <Input
          labelText="Birthday"
          inputType="date"
          :required="true"
          v-model="user.birthday"
          v-model:valid="validations.birthday"
        />

        <button
          :disabled="!validations.name || !validations.birthday"
          @click="step = 2"
        >
          Next
          <span class="material-icons-outlined"> arrow_right_alt </span>
        </button>
      </section>

      <section v-show="step == 2">
        <Input
          labelText="Username"
          :minLength="5"
          :maxLength="50"
          :required="true"
          :showCharCount="true"
          v-model="user.username"
          v-model:valid="validations.username"
        />
        <Input
          labelText="Email"
          inputType="email"
          :required="true"
          v-model="user.email"
          v-model:valid="validations.email"
        />

        <button :disabled="!validations.username || !validations.email" @click="step = 3">
          Next
          <span class="material-icons-outlined"> arrow_right_alt </span>
        </button>
      </section>

      <section v-show="step == 3">
        <Input
          labelText="Password"
          inputType="password"
          :minLength="8"
          :maxLength="20"
          :required="true"
          :showCharCount="true"
          v-model="user.password"
          v-model:valid="validations.password"
        />

        <Input
          labelText="Confirm Password"
          inputType="password"
          :minLength="8"
          :maxLength="20"
          :required="true"
          :showCharCount="true"
          v-model="confirmPassword"
          v-model:valid="confirmPasswordValid"
        />

        <button @click="signup">Sign up</button>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Input from "./Input.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Signup",
  components: { Input },
  data() {
    return {
      step: 1,
      user: {
        name: "",
        email: "",
        birthday: "",
        username: "",
      },
      validations: {
        name: null,
        birthday: null,
        username: null,
        email: null,
        password: null,
      },
      confirmPassword: "",
      confirmPasswordValid: null,
    };
  },
  methods: {
    signup() {
      alert("Good job! now get out!");
    },
  },
});
</script>

<style lang="scss" scoped>
.signup {
  position: relative;

  width: 90%;
  text-align: center;
  background: #fff;
  border-radius: 15px;
  padding: 4rem 3rem 3rem;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.2);

  .exit {
    position: absolute;
    top: 1rem;
    right: 2rem;

    cursor: pointer;
    font-size: 2rem;
  }

  &__header {
    ul {
      display: flex;
      align-items: center;

      list-style: none;

      li {
        display: grid;
        place-content: center;

        height: 30px;
        min-width: 30px;
        border-radius: 50%;

        cursor: pointer;
        color: #082d5e;
        font-weight: 700;
        font-size: 1.4rem;
        background: #ebebfb;

        &.active {
          color: #fff;
          background: #2f80ed;

          & + .connector .inner-bg {
            width: 100%;
          }
        }
      }

      .connector {
        width: 100%;
        height: 5px;
        margin: 0 1rem;
        border-radius: 1rem;
        background: #ebebfb;

        .inner-bg {
          width: 0%;
          height: 100%;
          border-radius: 1rem;
          background: #7c93fb;
        }

        &.active {
          .inner-bg {
            width: 30%;
          }
        }
      }
    }
  }

  &__content {
    margin-top: 2.5rem;

    button {
      width: 30%;
      display: flex;
      column-gap: 1rem;
      align-items: center;
      justify-content: center;

      margin-top: 2rem;
      margin-left: auto;
    }
  }
}
</style>