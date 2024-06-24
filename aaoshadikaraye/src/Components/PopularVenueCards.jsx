import styles from "../Components/Popular.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useService } from "../context/ServiceDataContext";
const PopularVenueCards = ({ data }) => {
  const [serviceData, setServiceData] = useService("");
  const history = useNavigate();
  async function OpenVenues(e) {
    localStorage.setItem("ServiceData",null);
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
    <>
      <div className={styles.card}>
        <a href="#" className={styles.Pop}>
          <div className={styles.img1}>
            <img src={data.img_link} className={styles.img} onClick={OpenVenues} id={data.type}/>
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
              <br></br>
              <a href="#" className={styles.linksA}>
                More
              </a>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default PopularVenueCards;
