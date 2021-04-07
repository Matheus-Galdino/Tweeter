<template>
  <div :class="['input-container', { error: valid === false }]">
    <div class="input-container__header">
      <label>{{ labelText }}</label>
      <p v-show="showCharCount && inputType != 'date'">
        {{ `${modelValue.length} / ${maxLength}` }}
      </p>
    </div>

    <div class="input-container__content">
      <span class="material-icons" v-show="startIcon">{{ startIcon }}</span>

      <input
        ref="input"
        :type="inputType"
        :tabindex="tabIndex"
        :maxlength="maxLength"
        @blur="validate"
        @input="$emit('update:modelValue', $event.target.value)"
      />

      <span class="material-icons-outlined error-icon" v-show="valid === false">
        error
      </span>
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
    minLength: {
      type: Number,
    },
    maxLength: {
      type: Number,
    },
    tabIndex: {
      type: Number,
      default: 0,
    },
    required: {
      type: Boolean,
      default: false,
    },
    showCharCount: {
      type: Boolean,
      default: false,
    },
    valid: {
      type: Boolean,
      default: null,
    },
  },
  methods: {
    validate(): void {
      if (this.required && this.modelValue === "") {
        this.$emit("update:valid", false);
        return;
      }

      if (this.minLength && this.modelValue.length < this.minLength) {
        this.$emit("update:valid", false);
        return;
      }

      this.$emit("update:valid", true);
    },
  },
});
</script>

<style lang="scss" scoped>
.input-container {
  margin: 1rem 0;

  &.error {
    label {
      color: #ed5d31;
    }

    .input-container__content {
      border: 2px solid #ed5d31;

      &:focus-within {
        border-bottom: 2px solid #ed5d31;
      }
    }

    input {
      caret-color: #ed5d31;
    }
  }

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

  &__content {
    display: flex;
    column-gap: 1rem;
    align-items: center;

    padding: 1.5rem;
    border-radius: 7px;
    border: 1px solid lightgray;
    transition: border-bottom 200ms ease-out;

    &:focus-within {
      border-bottom: 5px solid #2f80ed;
    }
  }

  input {
    flex-grow: 1;
    border: none;
    color: #082d5e;
    caret-color: #105bbc;
  }

  .error-icon {
    color: #ed5d31;
  }
}
</style>