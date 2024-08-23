import styles from "./styles.module.css";

function FormLayout(props: any) {
  return <div className={styles.formLayout}>{props.children}</div>;
}

export default FormLayout;
