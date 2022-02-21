import AuthLayout from "../../components/layouts/auth/AuthLayout";
import ForgotPassword from "../../components/pages/login/ForgotPassword";

const index = () => {
  return (
    <AuthLayout>
      <ForgotPassword />
    </AuthLayout>
  );
};

export default index;
