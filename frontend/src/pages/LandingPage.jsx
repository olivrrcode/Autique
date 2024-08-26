import styles from '../styles/landingpage.module.css';
import carBackground from '../assets/SplashBackground.png';
import LandingPageMain from './sections/LandingPageMain';
import LandingPageSecondary from './sections/LandingPageSecondary';

function LandingPage() {
  return (
    <div className={styles.container}>
      <img
        className={styles.splashImage}
        src={carBackground}
        alt='Car Background'
      />
      <LandingPageMain />
      <LandingPageSecondary />
    </div>
  );
}

export default LandingPage;
