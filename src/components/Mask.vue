<template>
  <section id="mask">
    <slot />
  </section>
</template>

<script langg="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mask",
});
</script>

<style lang="scss">
#mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}
</style>