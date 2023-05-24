import React from "react";
import styles from "./styles.module.css";
const Oppetider = () => {
  return (
    <div id="ÖPPETIDER" className={styles.mainContainerStyle}>
      <div className={styles.subContainerStyle}>
        <h2 className={styles.titleTextStyle}>ÖPPETIDER</h2>
        <div>
          <p className={styles.subTitleTextStyle}>
            Brygghallen håller öppet juni-augusti 2023
          </p>
          <p className={styles.optionTextStyle}>Onsdagar 11-22 </p>
          <p className={styles.optionTextStyle}>Torsdagar 11-22 </p>
          <p className={styles.optionTextStyle}>Fredagar 11-23 </p>
          <p className={styles.optionTextStyle}>Lördagar 11-23</p>
        </div>
      </div>
    </div>
  );
};

export default Oppetider;
