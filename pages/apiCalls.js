import axios from "axios";

export async function getCars() {
  let result = await axios.get("http://192.168.1.8:8000/seller-api/ads/ads", {
    auth: {
      username: "karan",
      password: 123,
    },
  });
  return result;
}
