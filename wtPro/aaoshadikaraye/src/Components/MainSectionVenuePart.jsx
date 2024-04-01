import styles from "./MainPage.module.css"
const VenueSection = () => {
  return (
    <>
     
      <br></br>
      <br></br>
      <h2 className={styles.h2tag}>Decorations</h2>
    

      <div className={styles.row}>
        <div className={styles.column}>
          <img
            src="https://cdn0.weddingwire.in/vendor/3670/3_2/960/jpeg/whatsapp-image-2023-04-17-at-1-03-24-pm-4_15_383670-169167490128807.webp"
            alt="Snow"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className={styles.column}>
          <img
            src="https://www.trvme.com/img/tours/nashik-destination-wedding-im1-1.jpeg"
            alt="Forest"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className={styles.column}>
          <img
            src="https://cdn0.weddingwire.in/vendor/7853/3_2/640/jpg/mandap_15_47853.jpeg"
            alt="Mountains"
            style={{ width: "100%" }}
          ></img>
        </div>
      </div>
    </>
  );
};
export default VenueSection;
