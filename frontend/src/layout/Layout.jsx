import Navbar from '../components/Navbar';
import styles from '../styles/layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
