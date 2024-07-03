import styles from "./styles.module.css";

function FormModal(props: any) {
  return <div className={styles.card}>{props.children}</div>;
}
export default FormModal;
