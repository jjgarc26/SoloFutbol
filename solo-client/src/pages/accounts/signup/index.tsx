"use client";
import { useRouter } from "next/navigation";
import Card from "@/UI/Card/Card";
import Input from "@/UI/Inputs/Input";
import { useState } from "react";
import Button from "@/UI/Button/Button";
function signUp() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function onLoginClick() {
    router.push("./login");
  }
  function onCreateAccount() {
    //API call will go here
    console.log("Creating account...");
  }
  return (
    <Card>
      <div>
        <div>
          <div>
            <Input
              labelName="Email"
              placeHolder="Email"
              type="text"
              onChange={setUsername}
            />
          </div>
          <div>
            <Input
              labelName="Username"
              placeHolder="Username"
              type="text"
              onChange={setUsername}
            />
          </div>
          <div>
            <Input
              labelName="Password"
              placeHolder="Password"
              type="password"
              onChange={setPassword}
            />
          </div>
          <div>
            <Input
              labelName="Password (re-enter)"
              placeHolder="Password"
              type="password"
              onChange={setPassword}
            />
          </div>
          <Button buttonName="Create account" onClick={onCreateAccount} />
        </div>
        <div>
          <h1>--- Have an account already? ---</h1>
          <Button buttonName="Login" onClick={onLoginClick}></Button>
        </div>
      </div>
    </Card>
  );
}
export default signUp;
