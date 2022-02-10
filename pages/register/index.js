import AuthLayout from "../../components/layouts/auth/AuthLayout";
import Register from "../../components/pages/register/Register";

const index = () => {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
};

export default index;
