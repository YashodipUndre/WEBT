import styles from "./OurPackages.module.css";
const OurPackages = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.h2tag}>Our Packages</h2>
      <div className={styles.container}>
        <div id="pkg1" className={styles.pkg}>
          <div className={styles.front}>
            <h2>Silver</h2>
          </div>
          <div className={styles.back}>
            <h2>Silver Package</h2>
            <p className={styles.price}>$99</p>
            <div className={styles.details}>
              <h3>Basic Membership Details:</h3>
              <ul>
                <li>Basic Feature 1</li>
                <li>Basic Feature 2</li>
                <li>Basic Feature 3</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="pkg2" className={styles.pkg}>
          <div className={styles.front}>
            <h2>Gold</h2>
          </div>
          <div className={styles.back}>
            <h2>Gold Package</h2>
            <p className={styles.price}>$49</p>
            <div className={styles.details}>
              <h3>Gold Membership Details:</h3>
              <ul>
                <li>Gold Feature 1</li>
                <li>Gold Feature 2</li>
                <li>Gold Feature 3</li>
                <li>Gold Feature 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div id={styles.pkg3} className={styles.pkg}>
          <div className={styles.front}>
            <h2>Diamond</h2>
          </div>
          <div className={styles.back}>
            <h2>Diamond Package</h2>
            <p className={styles.price}>$149</p>
            <div className={styles.details}>
              <h3>Diamond Membership Details:</h3>
              <ul>
                <li>Silver Feature 1</li>
                <li>Silver Feature 2</li>
                <li>Silver Feature 3</li>
                <li>Silver Feature 4</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="pkg4" className={styles.pkg}>
          <div className={styles.front}>
            <h2>Platinum</h2>
          </div>
          <div className={styles.back}>
            <h2>Platinum Package</h2>
            <p className={styles.price}>$199</p>
            <div className={styles.details}>
              <h3>Platinum Membership Details:</h3>
              <ul role="list" className="card__bullets flow">
                <li>Platinum Feature 1</li>
                <li>Platinum Feature 2</li>
                <li>Platinum Feature 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPackages;
