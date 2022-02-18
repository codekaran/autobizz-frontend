import React from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
import RegisterPage from "../../components/pages/register/RegisterPage";

const seller = () => {
  return (
    <AuthLayout>
      <RegisterPage
        title="Seller"
        URL="http://13.126.229.108/seller-api/sellers/register"
      />
    </AuthLayout>
  );
};

export default seller;
