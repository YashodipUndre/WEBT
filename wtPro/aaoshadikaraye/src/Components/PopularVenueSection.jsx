import styles from "../Components/PopularVenue.module.css";
import useCardSliderLogic from "./CardSliderLogic";
import PopularVenueCards from "./PopularVenueCards";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const PopularVenueSection = ({ data }) => {
  const { scrollLeftHandler, scrollRightHandler } = useCardSliderLogic();
  return (
    <section className={styles.popularVenueSection}>
      <h1 className={styles.h3tag}>Popular Venue Searches</h1>
      <div className={styles.container}>
        <div className={styles.cardContainer} id="card-container">
          <button className={styles.prev} onClick={scrollLeftHandler}>
            <FaChevronLeft />
          </button>
          {data.map((data) => (
            <PopularVenueCards key={data.type} data={data} />
          ))}
        </div>
        <button className={styles.next} onClick={scrollRightHandler}>
          <FaChevronRight />
        </button>
      </div>
      <div className="pagination" id="pagination">
        <p id="page-numbers"></p>
      </div>
    </section>
  );
};
export default PopularVenueSection;
