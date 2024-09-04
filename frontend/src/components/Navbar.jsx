import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "../styles/navbar.module.css";
import AccountIcon from "./AccountIcon";
import UnderlineFadeIn from "./UnderlineFadeIn";

function Navbar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMiddleClick = () => {
    navigate("/"); // Navigate to the home page when clicked
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <span className={`${styles.left} ${styles.navSpan}`}>
          <UnderlineFadeIn text="Buy" href="/buy" />
          <UnderlineFadeIn text="Sell" href="/sell" />
          <UnderlineFadeIn text="Discover" href="/discover" />
        </span>
        <span className={styles.middle} onClick={handleMiddleClick}></span>
        <span className={`${styles.right} ${styles.navSpan}`}>
          <UnderlineFadeIn text="Events" href="/events" />
          <UnderlineFadeIn text="Merchandise" href="/merchandise" />
          <AccountIcon userId="" />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
