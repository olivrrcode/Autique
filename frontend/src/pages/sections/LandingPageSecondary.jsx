import FlexColumn from '../../components/FlexColumn';
import ImageZoomHover from '../../components/ImageZoomHover';
import styles from '../../styles/landingpagesecondary.module.css';
import exhaust from '../../assets/exhaust.jpg';
import engine from '../../assets/engine.jpg';
import interior from '../../assets/interior.jpg';

function LandingPageSecondary() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          <FlexColumn>
            <ImageZoomHover
              src={engine}
              alt=''
              style={{ width: '100%', aspectRatio: 1 }}
            />
            <h3 style={{ textAlign: 'right', color: '#4a4a4a' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sagittis varius nisi, vitae pulvinar quam commodo sit amet. Ut
              interdum nibh eget augue viverra iaculis. Maecenas elit risus,
              imperdiet quis ultrices varius, congue non arcu. Integer
              vestibulum commodo aliquet. Suspendisse et purus nulla. Donec
              libero libero, tincidunt et nibh sit amet, rutrum imperdiet purus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae
            </h3>
          </FlexColumn>
          <FlexColumn>
            <h3 style={{ color: '#4a4a4a' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sagittis varius nisi, vitae pulvinar quam commodo sit amet. Ut
              interdum nibh eget augue viverra iaculis. Maecenas elit risus,
              imperdiet quis ultrices varius, congue non arcu. Integer
              vestibulum commodo aliquet. Suspendisse et purus nulla. Donec
              libero libero, tincidunt et nibh sit amet, rutrum imperdiet purus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae
            </h3>
            <ImageZoomHover
              src={exhaust}
              alt=''
              style={{ width: '100%', aspectRatio: 1 }}
            />
          </FlexColumn>
        </div>
        <div className={styles.row}>
          <ImageZoomHover
            src={interior}
            alt=''
            style={{ width: '100%', aspectRatio: '3/2' }}
          />
          <h3 style={{ width: '70%', color: '#4a4a4a' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            sagittis varius nisi, vitae pulvinar quam commodo sit amet. Ut
            interdum nibh eget augue viverra iaculis. Maecenas elit risus,
            imperdiet quis ultrices varius, congue non arcu. Integer vestibulum
            commodo aliquet. Suspendisse et purus nulla. Donec libero libero,
            tincidunt et nibh sit amet, rutrum imperdiet purus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae
          </h3>
        </div>
      </div>
    </div>
  );
}

export default LandingPageSecondary;
