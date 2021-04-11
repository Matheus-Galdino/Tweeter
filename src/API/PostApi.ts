import Post from "@/models/Post";
import BaseApi from "./BaseApi";

class PostApi extends BaseApi {
  async GetPosts(): Promise<Post[]> {
    const response = await this.basicFetch("https://localhost:44395/api/posts");

    return await response.json();
  }
  async GetPost(id: string): Promise<Post> {
    const response = await this.basicFetch(
      `https://localhost:44395/api/posts/${id}`
    );

    return await response.json();
  }
  async CreatePost(post: Post, token: string): Promise<Post> {
    const body = JSON.stringify(post);
    this.headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    };

    const response = await this.complexFetch(
      "https://localhost:44395/api/posts",
      "POST",
      body,
      this.headers
    );

    return await response.json();
  }
}

export default PostApi;
