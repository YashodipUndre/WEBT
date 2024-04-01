import styles from "../Components/Popular.module.css";
const PopularVenueCards = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        <a href="#" className={styles.Pop}>
          <div className={styles.img1}>
            <img src={data.img_link} className={styles.img} />
          </div>
          <div className={styles.data}>
            <h3 className={styles.h3tag}>{data.type}</h3>
            <div className={styles.links}>
              <a href="#" className={styles.linksA}>
                Pune |
              </a>
           
              <a href="#" className={styles.linksA}>
                Mumbai |
              </a>
              
              <a href="#" className={styles.linksA}>
                Rajasthan |
              </a>
              <br></br>
              <a href="#" className={styles.linksA}>
                More
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default PopularVenueCards;
