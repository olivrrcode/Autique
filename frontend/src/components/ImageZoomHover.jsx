import styles from '../styles/imagezoomhover.module.css';

function ImageZoomHover({ src, alt, style }) {
  return (
    <div
      className={styles.container}
      style={style}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default ImageZoomHover;
