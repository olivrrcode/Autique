import styles from '../styles/button.module.css';

function Button({ text }) {
  return <btn className={styles.btn}>{text}</btn>;
}

export default Button;
