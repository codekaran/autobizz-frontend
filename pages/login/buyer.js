import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginPage from "../../components/pages/login/LoginPage";

const buyer = () => {
  return (
    <AuthLayout>
      <LoginPage title="Buyer" URL="http://44.203.60.242:4000/form" />
    </AuthLayout>
  );
};

export default buyer;
