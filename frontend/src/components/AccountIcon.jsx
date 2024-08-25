import styles from '../styles/accounticon.module.css';

function AccountIcon({ userId }) {
  // TODO: Fetch user and put their image here

  return (
    <div className={styles.accountIconWrapper}>
      {userId ? (
        <img
          className={styles.accountIcon}
          src={`https://example.com/user-images/${userId}`}
          alt='Account Icon'
        />
      ) : (
        <div className={styles.defaultIcon}></div>
      )}
    </div>
  );
}

export default AccountIcon;
