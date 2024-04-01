import styles from "./MainPage.module.css"
const Corousel = () => {
  return (
    <div className={styles.slideshow}>
      <div className={styles.slideWrapper}>
        <div className={styles.slide}>
          <h1 className={styles.slideNumber}>
            <img
              src="https://image.slidesdocs.com/responsive-images/background/wedding-romantic-warm-illustration-scene-powerpoint-background_829e3217f9__960_540.jpg"
              className={styles.imgFluid}
              alt=""
            ></img>
          </h1>
        </div>
        <div className={styles.slide}>
          <h1 className={styles.slideNumber}>
            <img
              src="https://png.pngtree.com/background/20230401/original/pngtree-wedding-couple-watercolor-illustration-scene-picture-image_2248157.jpg"
              className={styles.imgFluid}
              alt=""
            ></img>
          </h1>
        </div>
        <div className={styles.slide}>
          <h1 className={styles.slideNumber}>
            <img
              src="https://png.pngtree.com/background/20230401/original/pngtree-wedding-stage-center-background-picture-image_2248445.jpg"
              className={styles.imgFluid}
              alt=""
            ></img>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Corousel;
