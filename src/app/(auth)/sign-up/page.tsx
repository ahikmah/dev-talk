"use client";

import React from "react";
import { AuthForm } from "@/components/forms";
import { SignUpSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      resolverAction={zodResolver(SignUpSchema)}
      defaultValues={{
        email: "",
        password: "",
        name: "",
        username: "",
      }}
      onSubmitAction={(values) => Promise.resolve({ success: true, values })}
    />
  );
};

export default SignUp;
