import styles from "./MainPage.module.css"
const MainSection2 = () => {
  return (
    <>
      <br></br>
      <br></br>
      <h2 className={styles.h2tag}>Photographers</h2>

      <div className={styles.responsive}>
        <div className={styles.gallery}>
          <a>
            <img
              src="https://i.pinimg.com/736x/e5/fc/5c/e5fc5c681f7a191f26f8f9babd6c1caa.jpg"
              alt="Cinque Terre"
              width="500"
              height="400"
            ></img>
          </a>
          <div className={styles.desc}>Add a description of the image here</div>
        </div>
      </div>
      <div className={styles.responsive}>
        <div className={styles.gallery}>
          <a>
            <img
              src="https://www.shubhlaxmifilms.com/wp-content/uploads/2022/11/010A8114-copy-01-scaled_11zon.jpg"
              alt="Forest"
              width="500"
              height="400"
            ></img>
          </a>
          <div className={styles.desc}>Add a description of the image here</div>
        </div>
      </div>
      <div className={styles.responsive}>
        <div className={styles.gallery}>
          <a>
            <img
              src="https://i.pinimg.com/736x/2d/71/0b/2d710b0092b4d7a79867db57a4418bf6.jpg"
              alt="Northern Lights"
              width="500"
              height="400"
            ></img>
          </a>
          <div className={styles.desc}>Add a description of the image here</div>
        </div>
      </div>
      <div className={styles.responsive}>
        <div className={styles.gallery}>
          <a>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMl9no_hInMPtCr0_5CMRcKB6WTCroFXgf5QIE7GQCBBo8cT8EberS0d3-Ipmo892Thw&usqp=CAU"
              alt="Mountains"
              width="500"
              height="400"
            ></img>
          </a>
          <div className={styles.desc}>Add a description of the image here</div>
        </div>
      </div>

      <div className="clearfix"></div>
    </>
  );
};
export default MainSection2;
