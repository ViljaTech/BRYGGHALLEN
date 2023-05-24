import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import menu from "../../assets/images/menu.svg";
const Navbar = () => {
  return (
    <div className={styles.mainContainerStyle}>
      <div className={styles.leftContainerStyle}>
        <div className={styles.leftContainerTopStyle}>
          <p className={styles.topTextStyle}>KULLENS BRYGGERI</p>
          <p className={styles.topTextStyle}>VIKEN BRYGGERI</p>
        </div>
        <div className={styles.leftContainerBottomStyle}>
          <h2 className={styles.bottomTextStyle}>BRYGGHALLEN</h2>
        </div>
      </div>
      <div className={styles.rightContainerStyle}>
        <a href="#MENY" className={styles.optionsTextStyle}>
          MENY
        </a>
        <a href="#KOMMANDEEVENTS" className={styles.optionsTextStyle}>
          KOMMANDE EVENTS
        </a>
        <a href="#BOKAVISNING" className={styles.optionsTextStyle}>
          BOKA DITT BESÖK
        </a>
        <a
          onClick={() => {
            document
              .getElementById("BOKAPRIVATAFESTER")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className={styles.optionsTextStyle}
        >
          BOKA DIN FEST
        </a>
        <a href="#ÖPPETIDER" className={styles.optionsTextStyle}>
          ÖPPETTIDER
        </a>
      </div>
      <div className={styles.menuImgContainerStyle}>
        <img src={menu} className={styles.menuImgStyle} />
      </div>
    </div>
  );
};

export default Navbar;
