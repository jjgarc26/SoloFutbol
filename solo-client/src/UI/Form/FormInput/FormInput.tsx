import Input from "@/UI/Inputs/Input";
import { InputInfo } from "@/UI/types";
import styles from "./styles.module.css";
function FormInput({ labelName, placeHolder, type, onChange }: InputInfo) {
  return (
    <div className={styles.formInput}>
      <Input
        labelName={labelName}
        placeHolder={placeHolder}
        type={type}
        onChange={onChange}
      />
    </div>
  );
}
export default FormInput;
