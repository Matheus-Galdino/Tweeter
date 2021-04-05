<template>
  <div class="select-wrapper">
    <select :value="selected" hidden>
      <option v-for="option in options" :value="option" :key="option.value">
        {{ option.text }}
      </option>
    </select>
    <p @click="selecting = false">{{ selected.text }}</p>
    <ul>
      <li v-for="option in options" :key="option" @click="selectItem(option)">
        {{ option.text }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SelectOption from "@/models/SelectOption.interface";

export default defineComponent({
  name: "Select",
  props: {
    options: {
      type: Array as PropType<SelectOption[]>,
      required: true,
    },
    selected: {
      type: Object as PropType<SelectOption>,
    },
  },
  data() {
    return {
      selecting: false,
    };
  },
  methods: {
    selectItem(option: SelectOption): void {
      this.selecting = false;
      this.$emit("update:selected", option);
    },
  },
});
</script>

<style lang="scss" scoped>
</style> 