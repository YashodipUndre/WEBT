import { FaRegStar, FaIndianRupeeSign } from "react-icons/fa6";
import { MdMonochromePhotos } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import styles from "./photo.module.css";
const LowerSectionClothing = ({
  venue,
  rating,
  location,
  clothingtype,
  price,
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
        <div className={styles.secondLine}>
          <h4 className={styles.customEditSLine}>
            <CiLocationOn className={styles.icon} />
            {location}
          </h4>
        </div>
        <div className={styles.secondLineDiv}>
          <h5>
            <GiClothes className={styles.icon} />
            {clothingtype}
          </h5>
          <div className={styles.secondLineDivSection2}>
            <h5 className={styles.priceT}>Price : </h5>
            <h3 className={styles.priceP}>
              <FaIndianRupeeSign className={styles.iconWidth} />
              {price}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default LowerSectionClothing;
