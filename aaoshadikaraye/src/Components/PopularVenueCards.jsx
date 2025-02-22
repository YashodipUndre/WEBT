import styles from "../Components/Popular.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useService } from "../context/ServiceDataContext";

const PopularVenueCards = ({ data }) => {
  const [serviceData, setServiceData] = useService([]);
  const navigate = useNavigate();

  async function OpenVenues(e) {
    const id = e.target.id;

    if (!id) {
      console.error("No ID found on the target element");
      return;
    }

    try {
      const response = await axios.get(
        `https://aaoshadikaraye.onrender.com/service/venues/${id}`,
        {
          withCredentials: true, // Include cookies
        }
      );
      setServiceData(response.data);
      localStorage.setItem("ServiceData", JSON.stringify(response.data));
      navigate("/Venues");
    } catch (error) {
      console.error("Error fetching venue data:", error);
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.Pop}>
        <div className={styles.img1}>
          <img
            src={data.img_link}
            className={styles.img}
            onClick={OpenVenues}
            id={data.type}
            alt={data.type} // Add alt for accessibility
          />
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
            <br />
            <a href="#" className={styles.linksA}>
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularVenueCards;
