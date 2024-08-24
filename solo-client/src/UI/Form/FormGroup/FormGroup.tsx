import styles from "./styles.module.css";

function FormGroup(props: any) {
  return <div className={styles.formGroup}>{props.children}</div>;
}
export default FormGroup;
