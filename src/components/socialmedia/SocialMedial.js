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
import useScrollDirection from "../../hooks/useScrollDirection";
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
  const images = [
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80",
    "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    "https://media.istockphoto.com/photos/the-main-attraction-of-paris-and-all-of-europe-is-the-eiffel-tower-in-picture-id1185953092?k=6&m=1185953092&s=612x612&w=0&h=SNiShskOfwQ7Sys5TX0eb5eBxHobktWUfZGrox5LMyk=",
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    "https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270",
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  ];
  const scrollDirection = useScrollDirection();

  return (
    <div className={styles.containerStyle}>
      <div className={styles.inner}>
        <div className={styles.wrapper}>
          <section
            className={styles.section}
            style={{
              "--start": `${scrollDirection === "up" ? "-100%" : "0"}`,
              "--end": `${scrollDirection === "up" ? "0%" : "-100%"}`,
              "--reverse": `${scrollDirection === "up" ? "reverse" : "normal"}`,
            }}
          >
            {data.map((image, index) => (
              <div className={styles.itemStyle}>
                <div key={index} className={styles.imageContainerStyle}>
                  <img src={image} className={styles.imgStyle} />
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
          </section>
          <section
            className={styles.section}
            style={{
              "--start": `${scrollDirection === "up" ? "-100%" : "0"}`,
              "--end": `${scrollDirection === "up" ? "0%" : "-100%"}`,
              "--reverse": `${scrollDirection === "up" ? "reverse" : "normal"}`,
            }}
          >
            {data.map((image, index) => (
              <div className={styles.itemStyle}>
                <div key={index} className={styles.imageContainerStyle}>
                  <img src={image} className={styles.imgStyle} />
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
          </section>
          {/* <section
            className={styles.section}
            style={{
              "--start": `${scrollDirection === "up" ? "-100%" : "0"}`,
              "--end": `${scrollDirection === "up" ? "0%" : "-100%"}`,
            }}
          >
            {data.map((image, index) => (
              <div className={styles.itemStyle}>
                <div key={index} className={styles.imageContainerStyle}>
                  <img src={image} className={styles.imgStyle} />
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
          </section> */}
        </div>
      </div>
      {/* <div className={styles.mainContainerStyle}>
        {data.map((item, index) => (
         
        ))}
      </div> */}
    </div>
  );
};

export default SocialMedial;
