import React from "react";
import styles from "./styles.module.css";
import location from "../../assets/images/location.svg";
import email from "../../assets/images/email.svg";
import call from "../../assets/images/call.svg";
import beers from "../../assets/images/beersnew1.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  const renderLeftContainer = () => {
    return (
      <div className={styles.leftContainerStyle}>
        <p className={styles.leftContainerTitleTextStyle}>kontakta oss</p>
        <div className={styles.optionStyle}>
          <div className={styles.imgContainerStyle}>
            <img src={location} className={styles.imgStyle} />
          </div>
          <p className={styles.optionTextStyle}>
            Pottenborgsvägen 6, 263 57 Höganäs
          </p>
        </div>
        <div className={styles.optionStyle}>
          <div className={styles.imgContainerStyle}>
            <img src={email} className={styles.imgStyle} />
          </div>
          <p className={styles.optionTextStyle}>boka@brygghallen.com</p>
        </div>
        <div className={styles.optionStyle}>
          <div className={styles.imgContainerStyle}>
            <img src={call} className={styles.imgStyle} />
          </div>
          <p className={styles.optionTextStyle}>070-600 29 19</p>
        </div>
      </div>
    );
  };
  const rendeMiddleContainer = () => {
    return (
      <div className={styles.middleContainerStyle}>
        <div className={styles.beersImgContainerStyle}>
          <img src={beers} className={styles.beersImgStyle} />
        </div>
        <div className={styles.logoContainerStyle}>
          <div className={styles.logoTextContainerStyle}>
            <div className={styles.topContentStyle}>
              <p className={styles.contentTextStyle}>KULLENS BRYGGERI</p>
              <p className={styles.contentTextStyle}>VIKEN BRYGGERI</p>
            </div>
            <h2 className={styles.contentTitleStyle}>BRYGGHALLEN</h2>
          </div>
        </div>
      </div>
    );
  };

  const renderRightContainer = () => {
    return (
      <div className={styles.rightContainerStyle}>
        <p className={styles.rightContainerTextStyle}>följ oss</p>
        <div className={styles.socilaMediaContainerStyle}>
          <Link
            to={"https://www.facebook.com/brygghallens/"}
            target="_blank"
            className={styles.socilaMediaIconStyle}
          >
            <img src={facebook} className={styles.imgStyle} />
          </Link>
          <Link
            to={"https://www.instagram.com/brygghallen/?hl=en/"}
            target="_blank"
            className={styles.socilaMediaIconStyle}
          >
            <img src={instagram} className={styles.imgStyle} />
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.mainContainerStyle}>
      <div className={styles.subContainerStyle}>
        {renderLeftContainer()}
        {rendeMiddleContainer()}
        {renderRightContainer()}
      </div>
    </div>
  );
};

export default Footer;
