"use client";

import React from "react";
import { AuthForm } from "@/components/forms";
import { SignInSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

const SignIn = () => {
  return (
    <AuthForm
      formType="SIGN_IN"
      resolverAction={zodResolver(SignInSchema)}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmitAction={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default SignIn;
