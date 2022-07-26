import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginPage from "../../components/pages/login/LoginPage";

const buyer = () => {
  return (
    <AuthLayout>
      <LoginPage title="Buyer" URL="http://3.83.43.208:4000/form" />
    </AuthLayout>
  );
};

export default buyer;
