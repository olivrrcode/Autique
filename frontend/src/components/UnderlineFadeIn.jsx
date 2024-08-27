import styles from '../styles/underlinefadein.module.css';
import { HashLink as Link } from 'react-router-hash-link';

function UnderlineFadeIn({ text, href }) {
  return (
    <Link
      className={styles.text}
      to={href}>
      {text}
    </Link>
  );
}

export default UnderlineFadeIn;
