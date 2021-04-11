<template>
  <div class="page feed">
    <create-tweet @created-post="loadPosts" />

    <div class="posts">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import PostApi from "@/API/PostApi";
import PostType from "@/models/Post";

import Post from "@/components/Post.vue";
import CreateTweet from "@/components/CreateTweet.vue";
import store from "@/store";

export default defineComponent({
  name: "Feed",
  components: {
    Post,
    CreateTweet,
  },
  data() {
    return {
      posts: [] as PostType[],
    };
  },
  methods: {
    async loadPosts() {
      const api = new PostApi();
      this.posts = await api.GetPosts();
    },
  },
  async beforeMount() {
    await this.loadPosts();
  },
});
</script>

<style lang="scss" scoped>
.feed {
  padding: 1.5rem 2rem 0;
  background: rgba(0, 0, 0, 0.1);
}

.posts {
  margin-top: 3rem;

  display: flex;
  row-gap: 2rem;
  flex-direction: column;
}
</style>