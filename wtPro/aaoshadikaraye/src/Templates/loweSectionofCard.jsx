import {
  FaRegStar,
  FaBuildingColumns,
  FaIndianRupeeSign,
} from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import styles from "./template.module.css";
const LowerSection = ({ venue, rating, location, type, veg, nonVeg,img }) => {
  return (
    <div className={styles.lowerDiv}>
      <img src={img}className={styles.cardImage} alt="..."></img>
      <div className={styles.firstLine}>
        <h4 className={styles.customEditFLine}>
          <strong>{venue}</strong>
        </h4>
        <div className={styles.rating}>
          <h5>
            <FaRegStar className={styles.icon}  />
            {rating}
          </h5>
        </div>
      </div>
      <div className={styles.secondLine}>
        <h4 className={styles.customEditSLine}>
          <CiLocationOn />
          {location}
        </h4>
        <div className={styles.rating}>
          <h5 className={styles.typeof}>
            <FaBuildingColumns className={styles.icon} />
            {type}
          </h5>
        </div>
      </div>

      <div className={styles.thirdLine}>
        <div className={styles.block1}>
          <h5 className={styles.customEditTLine}>Veg</h5>
          <h3 className={styles.price}>
            <FaIndianRupeeSign className={styles.iconWidth} />
            {veg}
          </h3>
        </div>
        <div className={styles.block1}>
          <h5 className={styles.customEditTLine}>Non-Veg</h5>
          <h3 className={styles.price}>
            <FaIndianRupeeSign className={styles.iconWidth} />
            {nonVeg}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default LowerSection;
