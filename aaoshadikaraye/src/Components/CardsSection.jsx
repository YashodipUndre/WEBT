import styles from "../Components/Card.module.css";
const CardSection = () => {
  return (
    <div className="container">
      <div className="row mb-4">
        <div className={styles.card}>
          <div className={styles.imageSection}>
            <div className="imgContainer">
              <img
                src="https://assets.cntraveller.in/photos/6518248def2f1357c63e279e/16:9/w_1920,h_1080,c_limit/Lead.jpg"
                alt=""
                className="img"
                width=" 150px"
                height="150px"
              ></img>
            </div>

            <div className="imgContainer">
              <img
                src="https://www.theknot.com/tk-media/images/18b39993-49ca-4f55-9cdf-9bdbe285e955"
                alt=""
                className="img"
                width=" 50px"
                height="100px"
              ></img>
            </div>
          </div>
          <div className={styles.dataSection}>
            <h5>Venues</h5>
            <p class="mb-0 text-muted">Lawns,Halls,Beach,Resorts...</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSection;
