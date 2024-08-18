"use client";
import { useRouter } from "next/navigation";
function signUp() {
  const router = useRouter();
  function onLoginClick() {
    router.push("./login");
  }
  return (
    <div>
      <h1>Sign rererup</h1>
      <div>
        <p>Already a member?</p>
        <button onClick={onLoginClick}>Login here</button>
      </div>
    </div>
  );
}
export default signUp;
