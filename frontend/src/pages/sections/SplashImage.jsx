import carBackground from '../../assets/SplashBackground.png';
import styles from '../../styles/splashimage.module.css';

function SplashImage() {
  return (
    <div className={styles.splashImageContainer}>
      <img
        className={styles.splashImage}
        src={carBackground}
        alt='Car Background'
      />
    </div>
  );
}

export default SplashImage;
