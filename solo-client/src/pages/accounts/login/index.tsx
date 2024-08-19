"use client";
import { useRouter } from "next/navigation";
import Card from "@/UI/Card/Card";
import { useState } from "react";
import Input from "@/UI/Inputs/Input";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function onSignUpClick() {
    router.push("./signup");
  }

  return (
    <Card>
      <div className="border-2 border-blue">
        <Input
          labelName="User Name"
          placeHolder="User Name"
          type="text"
          onChange={setUserName}
        />
        <Input
          labelName="Password"
          placeHolder="Password"
          type="password"
          onChange={setPassword}
        />
        <button>Login in</button>
      </div>
      <div>
        <p>Need an account?</p>
        <button onClick={onSignUpClick}>Sign up here</button>
      </div>
    </Card>
  );
}
export default Login;
