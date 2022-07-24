import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginPage from "../../components/pages/login/LoginPage";

const buyer = () => {
  return (
    <AuthLayout>
      <LoginPage title="Buyer" URL="http://54.175.33.63:4000/form" />
    </AuthLayout>
  );
};

export default buyer;
