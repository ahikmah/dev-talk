"use client";

import React from "react";
import Image from "next/image";
import ROUTES from "@/constants/routes";
import { signIn } from "next-auth/react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

// -----------------------------------------------------------

const authServices = [
  {
    id: "github",
    name: "Github",
    icon: "icons/github.svg",
    classIcon: "invert-colors",
    description: "Log in with Github",
  },
  {
    id: "google",
    name: "Google",
    icon: "icons/google.svg",
    classIcon: "",
    description: "Log in with Google",
  },
];
// -----------------------------------------------------------

export const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Failed to sign in",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while signing in",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      {authServices.map((service) => (
        <Button
          key={service.id}
          className={buttonClass}
          onClick={() => handleSignIn(service.id as "github" | "google")}
        >
          <Image
            src={service.icon}
            alt={`${service.name} Logo`}
            width={20}
            height={20}
            className={`mr-2.5 object-contain ${service.classIcon}`}
          />
          <span>{service.description}</span>
        </Button>
      ))}
    </div>
  );
};
