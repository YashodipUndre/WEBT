import styles from "./MainPage.module.css"
const MakeupPost = ({ data }) => {
  return (
    <>
      <div className={styles.w3card4} style={{ width: "30%" }}>
        <header>
          <h3>{data.name}</h3>
        </header>
        <div className="w3-container">
          <p>Hired by {data.no_of_customers} customers </p>

          <img
            src="https://www.shaadidukaan.com/vogue/wp-content/uploads/2020/03/rishabhagarwal-dulhan-makeup.jpg"
            alt="Avatar"
            className="w3-left w3-circle w3-margin-right"
            style={{ width: "60px" }}
          ></img>
          <p>{data.caption}</p>
        </div>
        <button>+ Connect</button>
      </div>
    </>
  );
};
export default MakeupPost;
