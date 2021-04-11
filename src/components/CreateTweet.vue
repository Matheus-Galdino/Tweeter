<template>
  <section class="create-tweet">
    <h2>Tweet Something</h2>

    <div class="create-tweet__content">
      <img :src="img" class="small-img" />
      <textarea
        rows="3"
        placeholder="What's happening?"
        v-model="post.content"
      ></textarea>
    </div>

    <div class="create-tweet__footer">
      <span class="material-icons-outlined"> image </span>
      <p>
        <span class="material-icons-outlined"> public </span>
        Everyone can reply
      </p>

      <button @click="tweet">Tweet</button>
    </div>
  </section>
</template>

<script lang="ts">
import PostApi from "@/API/PostApi";
import Post from "@/models/Post";
import { defineComponent } from "vue";

import store from "@/store";

export default defineComponent({
  name: "CreateTweet",
  data() {
    return {
      post: {
        content: "",
      } as Post,
      img:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    };
  },
  methods: {
    async tweet() {
      const api = new PostApi();
      const token = store.getters.token;
      await api.CreatePost(this.post, token);

      this.$emit("created-post");
      this.post.content = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.create-tweet {
  padding: 1rem 1.4rem;

  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    color: #4f4f4f;
    font-weight: 600;
    font-size: 1.3rem;

    margin-bottom: 0.85rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #f2f2f2;
  }

  &__content {
    display: flex;
    column-gap: 1rem;

    textarea {
      flex-grow: 1;
      border: none;
      resize: none;

      font-size: 1.6rem;
    }
  }

  &__footer {
    display: flex;
    column-gap: 1rem;
    align-items: center;

    .material-icons-outlined,
    p {
      cursor: pointer;
      color: #2f80ed;
    }

    p {
      display: flex;
      column-gap: 0.5rem;
      align-items: center;

      font-size: 1.3rem;
    }

    button {
      max-width: 10rem;
      margin-left: auto;
    }
  }
}
</style>