import styles from "./WeddingMainSection.module.css"
import { useState } from "react";
const WeddingCategoriesSection=()=>{
   const [state, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!state);
  };
    return(
        <section className={styles.outerDiv}>
            <h2 className={styles.h2tag}>Everything You Need!!</h2>
            <div className={styles.innerDiv}>
                <button className={styles.component}
                onClick={handleClick}
                >
                    <p>Venues</p>
                </button>
                {state && (<div className={styles.venueDiv}>
                    <a href="#" >Lawns and Resort</a>
                    <a href="#">$ Star and Above</a>
                    <a href="#" >Lawns and Resort</a>
                    <a href="#">$ Star and Above</a>
                    <a href="#" >Lawns and Resort</a>
                    <a href="#">$ Star and Above</a>
                    </div>)}
                    {
                        !state && (
                            <div className={styles.temp}>
                            <button href="#"className={styles.component1}>
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
                        )
                    }
                   
                    
              
                
            </div>
        </section>
    )
}
export default WeddingCategoriesSection