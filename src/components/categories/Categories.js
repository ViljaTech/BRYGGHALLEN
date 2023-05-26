import React from "react";
import styles from "./styles.module.css";
import downArrow1 from "../../assets/images/downArrow1.png";
const Categories = (props) => {
  return (
    <div
      id={props.Data.key}
      className={props.activeIndex === props.Data.id && styles.bgStyle}
    >
      <div
        style={{ "--bg-image": ` url(${props.Data.img})` }}
        className={styles.mainContainerStyle}
      >
        <img src={props.Data.img} className={styles.mainImgStyle} />
        <div className={styles.subContainerStyle}>
          <h2 className={styles.TitletextStyle}>{props.Data.name}</h2>
          <div
            onClick={() => props.OnClick()}
            className={styles.imgContainerStyle}
          >
            {/* props.activeIndex === props.Data.id ? upArrow1 : */}
            <img src={downArrow1} className={styles.imgStyle} />
          </div>
        </div>
      </div>
      {props.Data.name === "MENY" ? (
        <div
          className={
            !(props.activeIndex === props.Data.id)
              ? styles.animateDivStyle
              : styles.animateOpenDivStyle
          }
        >
          <div className={styles.detailsSubContainerStyle}>
            {props.Data.details.map((detaile, index) => (
              <div key={index} className={styles.containerStyle}>
                <div className={styles.textContainerStyle}>
                  <h2 className={styles.detaileTitleTextStyle}>
                    {detaile.name}
                  </h2>
                  <p className={styles.detaileDescTextStyle}>{detaile.desc}</p>
                </div>
                <p className={styles.detaileTitleTextStyle}>
                  {detaile.currency}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={
            props.activeIndex === props.Data.id
              ? styles.otherCategoryDetailStyle
              : styles.otherCategoryDetailStyle2
          }
        >
          {props.Data.details.map((detaile, index) => (
            <div key={index}>
              <p className={styles.detaileDescTextStyle}>{detaile.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
