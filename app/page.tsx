import { Link } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Link href="/login">
        Login
      </Link>
    </main>
  );
}
