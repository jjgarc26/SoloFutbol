"use client";
import Card from "@/UI/Card/Card";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";

function AccessModal() {
  const router = useRouter();
  function onLoginClick() {
    router.push("/login");
  }
  function onSignUpClick() {
    router.push("./signup");
  }

  return (
    <Card>
      <div className="grid grid-cols-4 gap-4 border-2">
        <div className="col-start-1 col-end-5 border-2 items-center">
          <h1 className={styles.header}>Solo sports</h1>
        </div>
        <div className="col-start-1 col-end-3">
          <button className="border-2 border-blue" onClick={onLoginClick}>
            Login
          </button>
        </div>
        <div className="col-end-5 col-span3">
          <button className="border-2" onClick={onSignUpClick}>
            Sign up
          </button>
        </div>
      </div>
    </Card>
  );
}
export default AccessModal;
// return (
//     <Card>
//       <div className="grid grid-cols-4 gap-4 border-2">
//         <div className="col-start-1 col-end-5 border-2 items-center">
//           <h1 className={styles.header}>Solo sports</h1>
//         </div>
//         <div className="col-start-1 col-end-3">
//           <button className="border-2 border-blue" onClick={onLoginClick}>
//             Login
//           </button>
//         </div>
//         <div className="col-end-5 col-span3">
//           <button className="border-2" onClick={onSignUpClick}>
//             Sign up
//           </button>
//         </div>
//       </div>
//     </Card>
//   );
