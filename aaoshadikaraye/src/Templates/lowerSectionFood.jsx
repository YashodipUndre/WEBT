import { FaRegStar, FaIndianRupeeSign } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import { FaBowlFood } from "react-icons/fa6";
import styles from "./photo.module.css";
const LowerSectionFood = ({
  venue,
  rating,
  foodtype,
  price_per_plate,
  img,
}) => {
  return (
    <>
      <img src={img} className={styles.cardImage} alt="..."></img>
      <div className={styles.lowerDiv}>
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
        <div className={styles.secondLineDiv}>
          <h5>
            <FaBowlFood className={styles.icon} />
            {foodtype}
          </h5>
          <div className={styles.secondLineDivSection2}>
            <h5 className={styles.priceT}>Price : </h5>
            <h3 className={styles.priceP}>{price_per_plate}</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default LowerSectionFood;
