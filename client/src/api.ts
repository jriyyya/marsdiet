import axios from "axios";
import { backendUrl } from "./config";

async function makeServerCall(
  url: string,
  method: string = "GET",
  data?: object
) {
  let req: any = {
    method: method,
    headers: { "Content-Type": "application/json" },
  };

  if (["POST", "PUT", "PATCH"].includes(method)) {
    req.body = JSON.stringify(data);
  }

  const res = await fetch(`${backendUrl}${url}`, req);

  return await res.json();
}

const server = {
  get(url: string) {
    return makeServerCall(url);
  },
  post(url: string, data: object) {
    return makeServerCall(url, "POST", data);
  },
  put(url: string, data: object) {
    return makeServerCall(url, "PUT", data);
  },
};

const api = {
  user: {
    async new(auth0_uid: string, picture: string) {
      //   await server.post("/user/new"),
      //     { auth0_uid: auth0_uid, picture: picture };
      await fetch(`${backendUrl}/user/new`, {
        method: "POST",
        body: JSON.stringify({ auth0_uid: auth0_uid, picture: picture }),
        headers: { "Content-Type": "application/json" },
      });
    },

    async update(
      auth0_uid: string,
      data: {
        picture?: string;
        name?: string;
        age?: number;
        gender?: string;
        weight?: number;
        height?: number;
      }
    ) {
      await server.put(`/user/${auth0_uid}/update`, data);
    },

    registration: {
      async status(auth0_uid: string) {
        const response = await server.get(
          `/user/${auth0_uid}/registration/status`
        );
        return response.data;
      },
    },
  },
};

export default api;
