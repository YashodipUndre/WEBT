import { FaRegStar ,FaIndianRupeeSign} from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import styles from "./photo.module.css";
const LowerSectionDeco = ({ venue, rating, location, decorationtype, price, img }) => {
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
            <PiSelectionBackgroundFill className={styles.icon} />
            {decorationtype}
          </h5>
        </div>
      </div>
      <div className={styles.block1}>
          <h5 className={styles.customEditTLine}>Price</h5>
          <h3 className={styles.price}>
            <FaIndianRupeeSign className={styles.iconWidth} />
            {price}
          </h3>
        </div>
    </div>
  );
};
export default LowerSectionDeco;
