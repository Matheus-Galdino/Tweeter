<template>
  <div class="input-container">
    <label :for="labelText">{{ labelText }}</label>
    <div>
      <span class="material-icons" v-show="startIcon">{{ startIcon }}</span>
      <input
        :type="inputType"
        :id="labelText"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span class="material-icons" v-show="endIcon">{{ endIcon }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    labelText: {
      type: String,
      default: "Label",
    },
    inputType: {
      type: String,
      default: "text",
      validator(value: string) {
        return ["text", "password", "email"].includes(value);
      },
    },
    modelValue: {
      type: String,
      default: "",
    },
    startIcon: {
      type: String,
    },
    endIcon: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.input-container {
  margin: 1rem 0;

  label {
    display: block;
    text-align: start;
    margin-bottom: 3px;

    color: #105bbc;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    padding: 1.5rem;
    color: #082d5e;
    border-radius: 7px;
    caret-color: #105bbc;
    border: 1px solid lightgray;
    transition: border-bottom 250ms ease-out;

    &:focus {
      border-bottom: 5px solid #2f80ed;
    }
  }
}
</style>