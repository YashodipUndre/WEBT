import { IoSearch, IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import styles from "./rightside.module.css";
import { useService } from "../context/ServiceDataContext";
const RightSide = () => {
  const [serviceData, setServiceData] = useService();
  function SubSearch(e){
    let data =serviceData.filter((item)=>{
            return(
              e.target.value && item && item.venue.toLowerCase().includes(e.target.value)
            );
          })
          if(data===null){
            data =  localStorage.getItem('ServiceData')
            data=JSON.parse(data);
          }
          setServiceData(data);
          // data = JSON.stringify(data);
        //  localStorage.setItem('subsearchdata',data);
  }
  return (
    <>
      <div className={styles.search}>
        <div className={styles.icon1}>
          <IoSearch />
        </div>

        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search"
          onChange={SubSearch}
        ></input>
      </div>
      <a className={styles.option} href="#">
        <div className={styles.icon}>
          <FaList />
        </div>

        <p className={styles.para}>
          <strong>List</strong>
        </p>
      </a>

      <a className={styles.option} href="#">
        <div className={styles.icon}>
          <IoGridOutline />
        </div>

        <p className={styles.para}>
          <strong>Grid</strong>
        </p>
      </a>
    </>
  );
};
export default RightSide;
