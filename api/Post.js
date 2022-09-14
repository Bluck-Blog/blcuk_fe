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
  confirmEmail: ({ code, verifyCode }) =>
    post(`api/session/verify?code=${code}&verifyCode=${verifyCode}`),
  login: (data) => post("api/session", data),
  register: (data) => post("api/users", data),
};
