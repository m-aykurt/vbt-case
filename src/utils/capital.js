import { capitalsApi } from "../utils/api";
capitals = []

export const capitalFunc = async () => {
  await capitalsApi().then((res) => console.log(res));
};
