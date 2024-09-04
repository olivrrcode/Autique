import styles from "../styles/landingpage.module.css";
import LandingPageMain from "./sections/LandingPageMain";
import LandingPageSecondary from "./sections/LandingPageSecondary";
import SplashImage from "./sections/SplashImage";

function LandingPage() {
  return (
    <div className={styles.container}>
      <SplashImage />
      <LandingPageMain />
      <LandingPageSecondary />
    </div>
  );
}

export default LandingPage;
