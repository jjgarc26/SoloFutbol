"use client";
import AccessModal from "@/components/AccessModal/AccessModal";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  function onLoginClick() {
    router.push("accounts/login");
  }
  return (
    <div className="border-2 border-rose-500 flex flex-col space-y-2">
      <button onClick={onLoginClick}>Get started!</button>
    </div>
  );
}
