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
        <li :class="{ active: step > 2 }" @click="step = 2">2</li>
        <div :class="['connector', { active: step >= 2 }]">
          <div class="inner-bg"></div>
        </div>
        <li :class="{ active: step == 3 }" @click="step = 3">3</li>
      </ul>
    </div>

    <div class="signup__content">
      <section v-show="step == 1">
        <Input
          labelText="Name"
          :maxLength="50"
          :showCharCount="true"
          v-model="user.name"
        />

        <Input labelText="Birthday" v-model="user.birthday" />

        <button @click="step = 2">
          Next
          <span class="material-icons-outlined"> arrow_right_alt </span>
        </button>
      </section>

      <section v-show="step == 2">
        <Input
          labelText="Username"
          :maxLength="50"
          :showCharCount="true"
          v-model="user.username"
        />
        <Input labelText="Email" inputType="email" v-model="user.email" />

        <button @click="step = 3">
          Next
          <span class="material-icons-outlined"> arrow_right_alt </span>
        </button>
      </section>

      <section v-show="step == 3">
        <Input
          labelText="Password"
          :maxLength="20"
          :showCharCount="true"
          v-model="user.password"
        />

        <Input
          labelText="Confirm Password"
          :maxLength="20"
          :showCharCount="true"
          v-model="confirmPassword"
        />

        <button @click="signup">Sign up</button>
      </section>
      <!--
          <Select
          :options="options"
          v-model:selected="selected"
        />
         {{ `${selected.text} || ${selected.value}` }} -->
    </div>
  </section>
</template>

<script lang="ts">
import Input from "./Input.vue";
// import Select from "./Select.vue";
import SelectOption from "@/models/SelectOption.interface";

import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Signup",
  components: { Input },
  data() {
    return {
      step: 1,
      selected: {
        type: Object as PropType<SelectOption>,
      },
      user: {
        name: "",
        email: "",
        birthday: "",
        username: "",
      },
      confirmPassword: "",
      options: [
        { text: "Option a", value: "A" },
        { text: "Option b", value: "B" },
        { text: "Option c", value: "C" },
      ] as SelectOption[],
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