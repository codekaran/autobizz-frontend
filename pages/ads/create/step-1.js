import Step_1 from "../../../components/pages/ads/Step_1";
import AuthLayout from "../../../components/layouts/auth/AuthLayout";
import axios from "/axios/index.js";
const create = (props) => {
  return (
    <AuthLayout>
      <Step_1 makes={props.content} />
    </AuthLayout>
  );
};

export async function getStaticProps() {
  let data = {};
  try {
    let res = await axios.get(`/seller-api/ref/getMakes`);
    // res = await res.json();
    // data = JSON.parse(res.data);
    console.log(res.data);
    data = res.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      content: data,
    },
  };
}

export default create;
