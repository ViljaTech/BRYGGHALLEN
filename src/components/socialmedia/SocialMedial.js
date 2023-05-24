import React from "react";
import styles from "./styles.module.css";
import insta1 from "../../assets/images/insta/insta1.jpeg";
import insta2 from "../../assets/images/insta/insta2.jpeg";
import insta3 from "../../assets/images/insta/insta3.jpeg";
import insta4 from "../../assets/images/insta/insta4.jpeg";
import insta5 from "../../assets/images/insta/insta5.jpeg";
import insta6 from "../../assets/images/insta/insta6.jpeg";
import insta7 from "../../assets/images/insta/insta7.jpeg";
import insta8 from "../../assets/images/insta/insta8.jpeg";
import insta9 from "../../assets/images/insta/insta9.jpeg";
const SocialMedial = () => {
  let data = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
    insta9,
  ];
  return (
    <div className={styles.containerStyle}>
      <div className={styles.mainContainerStyle}>
        {data.map((item, index) => (
          <div className={styles.itemStyle}>
            <div key={index} className={styles.imageContainerStyle}>
              <img src={item} className={styles.imgStyle} />
            </div>
            {index % 2 === 0 ? (
              <div className={styles.followTestStyle}>
                <p className={styles.textStyle}>FÖLJ VÅRA</p>
              </div>
            ) : (
              <div className={styles.followTestStyle}>
                <p className={styles.textStyle}>SOCIALE MEDIER</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMedial;
