import axios from "/axios/index.js";
export async function getCars() {
  let result = await axios.get(`/seller-api/ads/ads`, {
    auth: {
      username: "karan",
      password: 123,
    },
  });
  return result;
}
