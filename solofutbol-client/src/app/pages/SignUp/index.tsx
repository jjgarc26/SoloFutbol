"use client";
import { useRouter, usePathname } from "next/navigation";
function SignUp() {
  const pathName = usePathname();
  return (
    <div>
      <p>{pathName}</p>
      <h1 className="font-bold">Sign up</h1>
    </div>
  );
}
export default SignUp;
