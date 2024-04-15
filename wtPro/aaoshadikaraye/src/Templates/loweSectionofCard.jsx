import {
  FaRegStar,
  FaBuildingColumns,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import styles from "./template.module.css";
const LowerSection = ({ venue, rating, location, type, price,venuetype ,img }) => {
  return (
    <div className={styles.lowerDiv}>
      <img src={img}className={styles.cardImage} alt="..."></img>
      <div className={styles.firstLine}>
        <h4 className={styles.customEditFLine}>
          <strong>{venue}</strong>
        </h4>
        <div className={styles.ratingOG}>
          <h5>
            <FaRegStar className={styles.icon}  />
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
            <FaBuildingColumns className={styles.icon} />
            {venuetype}
          </h5>
        </div>
        <div className={styles.block1}>
          <h5 className={styles.customEditTLine}>Price</h5>
          <h3 className={styles.price}>
            <FaIndianRupeeSign className={styles.iconWidth} />
            {price}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default LowerSection;
