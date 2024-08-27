import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
