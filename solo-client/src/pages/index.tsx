"use client";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  function onLoginClick() {
    router.push("/login");
  }
  function onSignUpClick() {}

  return (
    <div className="border-2 border-rose-500 flex flex-col space-y-2">
      <div>
        <h1 className="text-3xl font-bold">Landing page</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <button className="border-2 border-blue" onClick={onLoginClick}>
          Login
        </button>
        <button className="border-2" onClick={onSignUpClick}>
          Sign up
        </button>
      </div>
    </div>
  );
}
