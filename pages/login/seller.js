import AuthLayout from "../../components/layouts/auth/AuthLayout";
import LoginPage from "../../components/pages/login/LoginPage";

const buyer = () => {
  return (
    <AuthLayout>
      <LoginPage
        title="Seller"
        URL="http://localhost:8000/seller-api/sellers/login"
      />
    </AuthLayout>
  );
};

export default buyer;
