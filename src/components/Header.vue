<template>
  <header>
    <img src="@/assets/tweeter.svg" alt="tweeter" />

    <ul>
      <li :class="{ active: tab == 'home' }" @click="tab = 'home'">
        <p>Home</p>
        <span class="material-icons"> home </span>
      </li>

      <li :class="{ active: tab == 'explore' }" @click="tab = 'explore'">
        <p>Explore</p>
        <span class="material-icons"> explore </span>
      </li>

      <li :class="{ active: tab == 'bookmark' }" @click="tab = 'bookmark'">
        <p>Bookmarks</p>
        <span class="material-icons"> bookmark </span>
      </li>
    </ul>

    <img
      class="small-img"
      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      tab: "explore",
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
  background: #fff;

  ul {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    list-style: none;
    background: #fff;
    padding: 1rem 1.5rem;
    border-top: 1px solid #f2f2f2;

    li {
      cursor: pointer;
      color: #828282;
      border-radius: 8px;
      padding: 1rem 3rem;

      &:hover {
        background: #f2f2f2;
      }

      &.active {
        color: #2f80ed;
      }
    }

    p {
      display: none;
      font-weight: 600;
      font-size: 1.5rem;
    }

    .material-icons {
      font-size: 2.6rem;
    }
  }

  img {
    cursor: pointer;
  }
}
</style>