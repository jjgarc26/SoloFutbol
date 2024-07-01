"use client";
import { useRouter, usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  const router = useRouter();
  function onLoginClick() {
    router.push("/Login");

    //route to login page
  }
  function onSignUpClick() {
    router.push("/SignUp");
    // route to sign up page
  }
  function onAboutClick() {
    router.push("/about/about");
    // route to sign up page
  }
  return (
    <div className="border-2 border-rose-500 flex flex-col space-y-2">
      <div>
        <p>{pathName}</p>
        <h1 className="text-3xl font-bold">Landing page</h1>
      </div>
      <div className="flex flex-row space-x-4">
        <button className="border-2 border-blue" onClick={onLoginClick}>
          Login
        </button>
        <button className="border-2" onClick={onSignUpClick}>
          Sign up
        </button>
        <button className="border-2" onClick={onAboutClick}>
          About
        </button>
      </div>
    </div>
  );
}
