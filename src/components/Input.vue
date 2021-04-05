<template>
  <div class="input-container">
    <div class="input-container__header">
      <label :for="labelText">{{ labelText }}</label>
      <p v-show="showCharCount && inputType != 'date'">
        {{ `${modelValue.length} / ${maxLength}` }}
      </p>
    </div>
    <div class="input-container__content">
      <span class="material-icons" v-show="startIcon">{{ startIcon }}</span>
      <input
        :type="inputType"
        :id="labelText"
        @input="$emit('update:modelValue', $event.target.value)"
        :maxlength="maxLength"
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
        return ["text", "password", "email", "date"].includes(value);
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
    maxLength: {
      type: Number,
    },
    showCharCount: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.input-container {
  margin: 1rem 0;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  label {
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