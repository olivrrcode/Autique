import styles from '../styles/flexcolumn.module.css';

function FlexColumn({ children, style }) {
  return (
    <div
      className={styles.flexColumn}
      style={style}>
      {children}
    </div>
  );
}

export default FlexColumn;
