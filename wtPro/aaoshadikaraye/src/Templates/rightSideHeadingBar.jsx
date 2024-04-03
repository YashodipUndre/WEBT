import { IoSearch, IoGridOutline } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import styles from "./rightside.module.css";
const RightSide = () => {
  return (
    <>
      <div className={styles.search}>
        <div className={styles.icon1}>
          <IoSearch />
        </div>

        <input
          className={styles.searchBox}
          type="text"
          placeholder="Search Wedding Venues"
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
