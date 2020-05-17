import { Base64 } from "https://deno.land/x/bb64/mod.ts";

class HttpClient {
  request = async (
    httpMethod: any,
    serverKey: string,
    httpUrl: string,
    parameter: any = {}
  ): Promise<void> => {
    let payload = parameter;
    let header = {
      "Content-type": "application/json",
      accept: "application/json",
      Authorization: `Basic ${Base64.fromString(serverKey).toString()}`,
    };

    return new Promise((resolve, reject) => {
      let aa = fetch(httpUrl, {
        method: httpMethod,
        headers: header,
        body: httpMethod != "get" ? payload : null,
      })
        .then((res) => res.json())
        .then((response) => resolve(response));
    });
  };
}

export default HttpClient;
