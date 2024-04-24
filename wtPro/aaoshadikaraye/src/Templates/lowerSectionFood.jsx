import { FaRegStar ,FaIndianRupeeSign} from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import {FaBowlFood} from 'react-icons/fa6';
import styles from "./photo.module.css";
const LowerSectionFood = ({ venue, rating, foodtype, price_per_plate, img }) => {
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

      <div className={styles.thirdLine}>
        <div className={styles.rating}>
          <h5 className={styles.typeof}>
            <FaBowlFood className={styles.icon} />
            {foodtype}
          </h5>
        </div>
        
      </div>
      <div className={styles.block1}>
          <h5 className={styles.customEditTLine}>Price</h5>
          <h3 className={styles.price}>
            {price_per_plate}
          </h3>
        </div>
    </div>
  );
};
export default LowerSectionFood;
