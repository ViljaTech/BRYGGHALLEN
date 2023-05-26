import React from "react";
import styles from "./styles.module.css";
import landingImage from "../../assets/images/landingImage.jpg";
import beerIcon from "../../assets/images/beerIcon.jpg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className={styles.maincontainerStyle}>
      <div className={styles.leftContainerStyle}>
        <div className={styles.leftContainerSbuStyle}>
          <div className={styles.beerWrapperStyle}>
            <img src={beerIcon} className={styles.beerIconStyle} />
          </div>
          <div className={styles.textContainerStyle}>
            <p className={styles.descTextStyle}>
              Welcome to the BRYGGHALLEN. You must be of legal drinking age to
              access this website.
            </p>
            <p className={styles.titleTextStyle}>Are you 18 years or older?</p>
          </div>
          <div className={styles.btnContainerStyle}>
            <div>
              <Link to="/home" className={styles.linkTextSTyle}>
                Yes
              </Link>
            </div>
            <div>
              <Link to="" className={styles.linkTextSTyle}>
                No
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainerStyle}>
        <img src={landingImage} className={styles.landingImageStyle} />
      </div>
    </div>
  );
};

export default LandingPage;
