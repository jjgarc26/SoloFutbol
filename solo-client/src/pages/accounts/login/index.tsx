import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();
  function onSignUpClick() {
    router.push("./signup");
  }
  return (
    <div>
      <div>
        <input></input>
        <input></input>
        <button>Login in</button>
      </div>
      <div>
        <p>Need an account?</p>
        <button onClick={onSignUpClick}>Sign up here</button>
      </div>
    </div>
  );
}
export default Login;
