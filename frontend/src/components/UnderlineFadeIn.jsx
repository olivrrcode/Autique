import styles from '../styles/underlinefadein.module.css';

function UnderlineFadeIn({ text, href }) {
  return (
    <a
      className={styles.text}
      href={href}>
      {text}
    </a>
  );
}

export default UnderlineFadeIn;
