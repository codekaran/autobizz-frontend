import Step_1 from "../../../components/pages/ads/Step_1";
import AuthLayout from "../../../components/layouts/auth/AuthLayout";
import axios from "/axios/index.js";
import Sell from "../../../components/globals/Sell/Sell";
const create = (props) => {
  return (
    <AuthLayout>
      <Sell />
    </AuthLayout>
  );
};

export default create;
