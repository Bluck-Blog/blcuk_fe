import { Axios } from "./Axios";

export const post = async (path, body) => {
  const data = await Axios.post(path, body);
  return data;
};

export const POST = {
  confirmEmail: (data) => post("api/session/verify", data),
  login: (data) => post("api/session", data),
};
