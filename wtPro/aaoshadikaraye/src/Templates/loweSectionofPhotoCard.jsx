import { FaRegStar } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import styles from "./photo.module.css";
const LowerSection = ({ venue, rating, location, type, veg, nonVeg, img }) => {
  return (
    <div className={styles.lowerDiv}>
      <img src={img} className={styles.cardImage} alt="..."></img>
      <div className={styles.firstLine}>
        <h4 className={styles.customEditFLine}>
          <strong>{venue}</strong>
        </h4>
        <div className={styles.ratingOG}>
          <h5>
            <FaRegStar className={styles.icon} />
            {rating}
          </h5>
        </div>
      </div>
      <div className={styles.secondLine}>
        <h4 className={styles.customEditSLine}>
          <CiLocationOn className={styles.icon} />
          {location}
        </h4>
      </div>

      <div className={styles.thirdLine}>
        <div className={styles.rating}>
          <h5 className={styles.typeof}>
            <MdMonochromePhotos className={styles.icon} />
            {type}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default LowerSection;
