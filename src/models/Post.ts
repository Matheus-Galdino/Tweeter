import User from "./User";

export default interface Post {
  id: string;
  user: User;
  content: string;
  createdAt: Date;
}
