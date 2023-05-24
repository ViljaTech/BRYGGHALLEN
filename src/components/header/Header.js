import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import styles from "./styles.module.css";
import beer1 from "../../assets/images/beer1.svg";
import beer2 from "../../assets/images/beer2.svg";
import beer3 from "../../assets/images/beer3.svg";
const Header = () => {
  return (
    <div className={styles.mainContainerStyle}>
      <div className={styles.mainContainerTopStyle}>
        <Navbar />
        <div className={styles.middleContainerTextStyle}>
          <div className={styles.middleContainerTextSubStyle}>
            <p className={styles.middleContainerTopTextStyle}>
              KULLENS BRYGGERI
            </p>
            <p className={styles.middleContainerTopTextStyle}>VIKEN BRYGGERI</p>
          </div>
          <h1 className={styles.middleContainerBottomTextStyle}>BRYGGHALLEN</h1>
        </div>
      </div>
      <div className={styles.mainContainerBottomStyle}>
        <div className={styles.eachContainerStyle}>
          <div className={styles.eachContainerSubStyle}>
            <div className={styles.beerImgContainerStyle}>
              <img src={beer1} className={styles.beerImgStyle} />
            </div>
            <p className={styles.eachBeerTitleTextStyle}>beer tasting</p>
          </div>
          <p className={styles.eachBeerDescTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className={styles.deviderStyle}></div>
        <div className={styles.eachContainerStyle}>
          <div className={styles.eachContainerSubStyle}>
            <div className={styles.beerImgContainerStyle}>
              <img src={beer2} className={styles.beerImgStyle} />
            </div>
            <p className={styles.eachBeerTitleTextStyle}>beer tasting</p>
          </div>
          <p className={styles.eachBeerDescTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
        <div className={styles.deviderStyle}></div>
        <div className={styles.eachContainerStyle}>
          <div className={styles.eachContainerSubStyle}>
            <div className={styles.beerImgContainerStyle}>
              <img src={beer3} className={styles.beerImgStyle} />
            </div>
            <p className={styles.eachBeerTitleTextStyle}>beer tasting</p>
          </div>
          <p className={styles.eachBeerDescTextStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
