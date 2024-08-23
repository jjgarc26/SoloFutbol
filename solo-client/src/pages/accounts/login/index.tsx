"use client";
import { useRouter } from "next/navigation";
import Card from "@/UI/Card/Card";
import { useState } from "react";
import Input from "@/UI/Inputs/Input";
import style from "./styles.module.css";
import Button from "@/UI/Button/Button";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function onSignUpClick() {
    router.push("./signup");
  }

  function onLogin() {
    // API call will be made here
    console.log("Logging in....");
  }

  return (
    <Card>
      <div className={style.form}>
        <div className={style.login}>
          <div className={style.loginInput}>
            <Input
              labelName="Username"
              placeHolder="Username"
              type="text"
              onChange={setUserName}
            />
          </div>
          <div className={style.loginInput}>
            <Input
              labelName="Password"
              placeHolder="Password"
              type="password"
              onChange={setPassword}
            />
          </div>
          <Button buttonName="Login" onClick={onLogin} />
        </div>
        <div className={style.signUp}>
          <h1 className={style.heading1}>--- Need an account? ---</h1>
          <Button buttonName="Sign up" onClick={onSignUpClick} />
        </div>
      </div>
    </Card>
  );
}
export default Login;
