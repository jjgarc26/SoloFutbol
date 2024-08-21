"use client";
import { InputInfo } from "../types";
import styles from "./styles.module.css";

function Input({ labelName, placeHolder, type, onChange }: InputInfo) {
  return (
    <div className={styles.inputComponent}>
      <label className={styles.label}>{labelName}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}
export default Input;
