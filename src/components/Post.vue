<template>
  <div class="post">
    <section class="post__header">
      <img :src="img" class="small-img" />

      <div>
        <p>{{ post?.user?.name }}</p>
        <small>{{ formatedDate }}</small>
      </div>
    </section>

    <section class="post__content">
      <p>{{ post?.content }}</p>
      <img :src="postImg" />

      <div class="counters">
        <animated-counter text="Comments" :maxValue="449" />
        <animated-counter text="Retweets" :maxValue="50367" />
        <animated-counter text="Saved" :maxValue="234" />
      </div>
    </section>

    <section class="post__footer">
      <div class="interactions">
        <span class="material-icons-outlined"> mode_comment </span>
        <span class="material-icons-outlined retweet active"> autorenew </span>
        <span class="material-icons-outlined like"> favorite_border </span>
        <span class="material-icons-outlined bookmark"> bookmark_border </span>
      </div>

      <div class="comment-section">
        <img :src="img" class="small-img" />
        <input type="text" placeholder="Tweet your reply" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import AnimatedCounter from "@/components/AnimatedCounter.vue";
import PostType from "@/models/Post";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Post",
  components: {
    AnimatedCounter,
  },
  props: {
    post: {
      type: Object as PropType<PostType>,
      required: true,
    },
  },
  data() {
    return {
      img:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      postImg:
        "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    };
  },
  computed: {
    formatedDate(): string {
      return new Date(this.post.createdAt).toDateString();
    },
  },
});
</script>

<style lang="scss" scoped>
.post {
  padding: 2rem;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);

  &__header {
    display: grid;
    column-gap: 1.5rem;
    grid-template-columns: auto 1fr;

    margin-bottom: 2rem;

    div {
      letter-spacing: -0.035em;
    }

    p {
      font-size: 1.6rem;
    }

    small {
      color: #bdbdbd;
      font-size: 1.2rem;
    }
  }

  &__content {
    p {
      color: #4f4f4f;
      font-size: 1.6rem;
      letter-spacing: -0.035em;
    }

    img {
      width: 100%;
      min-width: 31rem;
      max-width: 70rem;
      object-fit: cover;

      min-height: 19rem;
      max-height: 37.5rem;

      margin: 1.5rem 0;
      border-radius: 10px;
    }
  }

  &__footer {
    margin-top: 0.5rem;
  }
}

.counters {
  display: flex;
  justify-content: flex-end;
  column-gap: 1.5rem;

  p {
    cursor: pointer;
    color: #bdbdbd;
    font-size: 1.3rem;
  }
}

.interactions {
  display: flex;
  justify-content: space-evenly;

  padding: 0.5rem 0;

  border-top: 1px solid #f2f2f2;
  border-bottom: 1px solid #f2f2f2;

  .material-icons-outlined {
    cursor: pointer;
    color: #4f4f4f;
    border-radius: 8px;
    padding: 1.2rem 2rem;

    &:hover {
      background: #f2f2f2;
    }

    &.active {
      &.retweet {
        color: #27ae60;
      }
      &.like {
        color: #eb5757;
      }
      &.bookmark {
        color: #2d9cdb;
      }
    }
  }
}

.comment-section {
  display: flex;
  column-gap: 1.5rem;
  align-items: center;

  margin-top: 1rem;

  input {
    flex-grow: 1;
    padding: 1rem;
    font-size: 1.4rem;

    border-radius: 8px;
    background: #fafafa;
    border: 1px solid #f2f2f2;
  }
}
</style>