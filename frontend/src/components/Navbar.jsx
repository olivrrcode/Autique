import styles from '../styles/navbar.module.css';
import AccountIcon from './AccountIcon';
import UnderlineFadeIn from './UnderlineFadeIn';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.wrapper}>
        <span className={`${styles.left} ${styles.navSpan}`}>
          <UnderlineFadeIn
            text='Buy'
            href=''
          />
          <UnderlineFadeIn
            text='Sell'
            href=''
          />
          <UnderlineFadeIn
            text='Discover'
            href=''
          />
        </span>
        <span className={styles.middle}>
          <UnderlineFadeIn
            text='LOGO HERE'
            href=''
          />
        </span>
        <span className={`${styles.right} ${styles.navSpan}`}>
          <UnderlineFadeIn
            text='Events'
            href=''
          />
          <UnderlineFadeIn
            text='Merchandise'
            href=''
          />
          <AccountIcon userId='' />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
