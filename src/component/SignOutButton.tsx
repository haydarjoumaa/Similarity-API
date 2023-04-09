"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { signIn, signOut } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignOutButton {}

const SignOutButton: FC<SignOutButton> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signOutWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error Signing out",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signOutWithGoogle} isLoading={isLoading}>
      Sign-in
    </Button>
  );
};

export default SignOutButton;
