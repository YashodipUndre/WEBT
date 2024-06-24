import styles from "./WeddingMainSection.module.css";
import { useState } from "react";
import axios from "axios";
import { useService } from "../context/ServiceDataContext";
import { useNavigate } from "react-router-dom";
const WeddingCategoriesSection = () => {
  const history = useNavigate();
  const [state, setIsVisible] = useState(false);

  const [serviceData, setServiceData] = useService("");
  const handleClick = () => {
    setIsVisible(!state);
  };
  async function photo(e) {
    localStorage.setItem("ServiceData", null);
    history("/Photo");

    try {
      const ans = await axios.get(`http://localhost:8080/service/Photos`);
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function Clothing(e) {
    localStorage.setItem("ServiceData", null);
    history("/clothing");

    try {
      const ans = await axios.get(`http://localhost:8080/service/clothing`);
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function makeup(e) {
    localStorage.setItem("ServiceData", null);
    history("/makeup");

    try {
      const ans = await axios.get(`http://localhost:8080/service/makeup`);
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function decoration(e) {
    localStorage.setItem("ServiceData", null);
    history("/deco");

    try {
      const ans = await axios.get(`http://localhost:8080/service/deco`);
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function food(e) {
    localStorage.setItem("ServiceData", null);
    history("/food");

    try {
      const ans = await axios.get(`http://localhost:8080/service/food`);
      setServiceData(ans.data);
      localStorage.setItem("ServiceData", JSON.stringify(ans.data));
    } catch (error) {
      console.log(error);
    }
  }
  async function OpenVenues(e) {
    localStorage.setItem("ServiceData", null);
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
              Lawns
            </a>
            <a href="#" id="FarmHouse" onClick={OpenVenues}>
              FarmHouse
            </a>
            <a href="#" id="banquet hall" onClick={OpenVenues}>
              BanquetHall
            </a>
            <a href="#" id="lounge" onClick={OpenVenues}>
              Lounge
            </a>
            <a href="#" id="weddingresort" onClick={OpenVenues}>
              WeddingResort
            </a>
          </div>
        )}
        {!state && (
          <div className={styles.temp}>
            <button href="#" className={styles.component1} onClick={decoration}>
              <p>Decor</p>
            </button>

            <button className={styles.component2} onClick={food}>
              <p>Food</p>
            </button>
            <button className={styles.component3}>
              <p>Functions</p>
            </button>
            <button className={styles.component4} onClick={photo} id="Photos">
              <p>Photos</p>
            </button>
            <button className={styles.component5} onClick={makeup}>
              <p>Makeup</p>
            </button>
            <button className={styles.component7} onClick={Clothing}>
              <p>Clothing</p>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
export default WeddingCategoriesSection;
