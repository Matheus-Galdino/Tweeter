<template>
  <h1>{{ `${currentValue} ${text}` }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AnimatedCounter",
  props: {
    text: {
      type: String,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentValue: 0,
    };
  },
  mounted() {
    const interval = setInterval(() => {
      this.currentValue = this.currentValue + 57;

      if (this.currentValue > this.maxValue) {
        this.currentValue = this.maxValue;
        clearInterval(interval);
      }
    }, 5);
  },
});
</script>

<style>
</style>