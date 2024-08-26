import styles from '../styles/card.module.css';
import ImageZoomHover from './ImageZoomHover';

function Card({ src, alt, title, style }) {
  return (
    <div className={styles.card}>
      <ImageZoomHover
        className={styles.image}
        src={src}
        alt={alt}
        style={style}
      />
      <h4 className={styles.title}>{title}</h4>
    </div>
  );
}

export default Card;
