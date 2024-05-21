import React from "react" 
import styles from "./index.module.scss";


function Detail() {
  return (
    <>
      {menu && (
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={menu.imgSrc} alt="" />
          </div>
          <div className={styles.cardBody}>
            <span>${menu.price}</span>
            <h5>{menu.title}</h5>
            <p>{menu.description}</p>
          </div>
          <div className={styles.cardFooter}>
          </div>
        </div>
      )}
    </>
  );
}

export default Detail;
