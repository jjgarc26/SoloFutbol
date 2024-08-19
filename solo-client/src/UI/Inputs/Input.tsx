"use client";
import { InputInfo } from "../types";

function Input({ labelName, placeHolder, type, onChange }:InputInfo) {
  return (
    <div>
      <label>{labelName}</label>
      <input
        type={type}
        placeholder={placeHolder}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
}
export default Input;
