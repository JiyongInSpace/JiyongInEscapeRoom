"use client";

import { Button } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const onClickLogin = () => {
    signIn("google");
  };

  return (
    <main>
      <Button onClick={onClickLogin}>Hi!</Button>
    </main>
  );
}
