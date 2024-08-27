import styles from '../styles/accounticon.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AccountIcon({ userId }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAccountClick = () => {
    navigate('/account'); // Navigate to the home page when clicked
  };
  // TODO: Fetch user and put their image here

  return (
    <div
      className={styles.accountIconWrapper}
      onClick={handleAccountClick}>
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
