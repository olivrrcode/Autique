import styles from '../../styles/landingpagemain.module.css';
import CarMain from '../../assets/CarMain.png';
import RecentPosts from '../../components/RecentPosts';
import Button from '../../components/Button';

function LandingPageMain() {
  return (
    <div className={styles.container}>
      <h1 className={styles.copy}>
        Welcome to the world of antique motors on Autique. <br />
        Where the cars of the yesterday can be yours tomorrow.
      </h1>

      <img
        className={styles.mainImg}
        src={CarMain}
        alt=''
      />
      <span className={styles.headingSpan}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          sagittis varius nisi, vitae pulvinar quam commodo sit amet. Ut
          interdum nibh eget augue viverra iaculis. Maecenas elit risus,
          imperdiet quis ultrices varius, congue non arcu. Integer vestibulum
          commodo aliquet. Suspendisse et purus nulla. Donec libero libero,
          tincidunt et nibh sit amet, rutrum imperdiet purus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae;
        </p>
      </span>
      <RecentPosts />
      <Button
        text='View the full collection'
        onclick={'function'}
      />
    </div>
  );
}

export default LandingPageMain;
