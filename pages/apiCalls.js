import axios from "axios";
import { server } from "../variables/server";
export async function getCars() {
  let result = await axios.get(`${server.serverURL}/seller-api/ads/ads`, {
    auth: {
      username: "karan",
      password: 123,
    },
  });
  return result;
}
