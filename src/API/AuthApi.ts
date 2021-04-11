import Token from "@/models/Token";
import User from "@/models/User";
import BaseApi from "./BaseApi";

class AuthApi extends BaseApi {
  async Login(user: User): Promise<Token> {
    const body = JSON.stringify(user);
    const url = "https://localhost:44395/api/auth/login";

    const response = await this.complexFetch(url, "POST", body, this.headers);
    return await response.json();
  }

  async Signup(user: User) {
    const body = JSON.stringify(user);
    const url = "https://localhost:44395/api/auth/signup";
    const response = await this.complexFetch(url, "POST", body, this.headers);
    return await response.json();
  }
}

export default AuthApi;
