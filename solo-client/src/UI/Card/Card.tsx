import styles from "./styles.module.css";

function Card(props: any) {
  return <div className={styles.card}>{props.children}</div>;
}
export default Card;
