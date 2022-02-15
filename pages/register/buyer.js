import React from "react";
import AuthLayout from "../../components/layouts/auth/AuthLayout";
import RegisterPage from "../../components/pages/register/RegisterPage";

const Buyer = () => {
  return (
    <AuthLayout>
      <RegisterPage title="Buyer" />
    </AuthLayout>
  );
};

export default Buyer;
