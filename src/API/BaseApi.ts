export default class BaseAPi {
  protected headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  protected async basicFetch(url: string): Promise<Response> {
    return await fetch(url);
  }

  protected async complexFetch(
    url: string,
    method: string,
    body: string,
    headers?: Record<string, string>
  ) {
    return await fetch(url, { method, headers, body });
  }
}
