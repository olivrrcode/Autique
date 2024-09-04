import { useEffect } from "react";
import styles from "../styles/landingpage.module.css";
import LandingPageMain from "./sections/LandingPageMain";
import LandingPageSecondary from "./sections/LandingPageSecondary";
import SplashImage from "./sections/SplashImage";
import axios from "axios";

function LandingPage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/");
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <SplashImage />
      <LandingPageMain />
      <LandingPageSecondary />
    </div>
  );
}

export default LandingPage;
