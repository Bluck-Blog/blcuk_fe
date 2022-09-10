import { Axios } from "./Axios";

export const post = async (path, body) => {
  try {
    const data = await Axios.post(path, body);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const POST = {
  confirmEmail: (data) => post("api/session/verify", data),
  login: (data) => post("api/session", data),
  register: (data) => post("api/user", data),
};
