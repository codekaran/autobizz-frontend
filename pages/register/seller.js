import React from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
import RegisterPage from "../../components/pages/register/RegisterPage";

const seller = () => {
  return (
    <AuthLayout>
      <RegisterPage title="Seller" />
    </AuthLayout>
  );
};

export default seller;
