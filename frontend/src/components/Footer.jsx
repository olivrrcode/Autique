import styles from '../styles/footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <span>
          <h3>Contact Us</h3>
        </span>
        <span>
          <h3>Explore Autique</h3>
        </span>
        <span>
          <h3>Customer Support</h3>
        </span>
        <span>
          <h3>Information</h3>
        </span>
        <span>
          <h3>Follow Us</h3>
        </span>
      </div>
    </div>
  );
}

export default Footer;
