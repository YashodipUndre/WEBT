import styles from "./WeddingMainSection.module.css";
import { useState } from "react";
import axios from "axios";
import { useService } from "../ServiceDataContext";
import { useNavigate } from "react-router-dom";
const WeddingCategoriesSection = () => {
  const history = useNavigate();
  const [state, setIsVisible] = useState(false);
  const [serviceData, setServiceData] = useService("");
  const handleClick = () => {
    setIsVisible(!state);
  };
  async function OpenVenues(e) {
    
    history("/Venues");
    try {
      const ans = await axios.get(
        `http://localhost:8080/service/venues/${e.target.id}`
      );
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className={styles.outerDiv}>
      <h2 className={styles.h2tag}>Everything You Need!!</h2>
      <div className={styles.innerDiv}>
        <button className={styles.component} onClick={handleClick}>
          <p>Venues</p>
        </button>
        {state && (
          <div className={styles.venueDiv}>
            <a href="#" id="All" onClick={OpenVenues}>
              All Types
            </a>
            <a href="#" id="lawns" onClick={OpenVenues}>
              lawns
            </a>
            <a href="#" id="FarmHouse" onClick={OpenVenues}>
              FarmHouse
            </a>
            <a href="#" id="" onClick={OpenVenues}>
              All Types
            </a>
            <a href="#" id="" onClick={OpenVenues}>
              All Types
            </a>
            <a href="#" id="" onClick={OpenVenues}>
              All Types
            </a>
          </div>
        )}
        {!state && (
          <div className={styles.temp}>
            <button href="#" className={styles.component1}>
              <p>Decor</p>
            </button>

            <button className={styles.component2}>
              <p>Food</p>
            </button>
            <button className={styles.component3}>
              <p>Functions</p>
            </button>
            <button className={styles.component4}>
              <p>Photos</p>
            </button>
            <button className={styles.component5}>
              <p>Makeup</p>
            </button>
            <button className={styles.component7}>
              <p>Clothing</p>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default WeddingCategoriesSection;
