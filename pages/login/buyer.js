import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginPage from "../../components/pages/login/LoginPage";

const buyer = () => {
  return (
    <AuthLayout>
      <LoginPage title="Buyer" URL="http://localhost:4000/form" />
    </AuthLayout>
  );
};

export default buyer;
