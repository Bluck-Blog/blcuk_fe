import { Axios } from "./Axios";

export const get = async (path) => {
  try {
    const data = await Axios.get(path);
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const GET = {
  selectAllPosts: async () => await get("api/posts"),
  sentAuthEmail: async (email) =>
    await get(`api/session/verify?email=${email}`),
};
