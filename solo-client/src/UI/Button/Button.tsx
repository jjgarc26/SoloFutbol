"use client";

import { ButtonInfo } from "../types";
import styles from "./styles.module.css";

function Button({ buttonName, onClick }: ButtonInfo) {
  return (
    <button className={styles.button} onClick={onClick}>
      {buttonName}
    </button>
  );
}
export default Button;
