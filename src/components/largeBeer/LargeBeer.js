import React from "react";
import styles from "./styles.module.css";
import largebeer from "../../assets/images/largeBeer1.svg";
import beers from "../../assets/images/beersnew.png";
import video from "../../assets/videos/Untitled-2-2-2-2.mp4";
import { Link, useNavigate } from "react-router-dom";
const LargeBeer = () => {
  const navigation = useNavigate();
  const reveal = () => {
    var reveals = document.querySelectorAll("#reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 90;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add(styles.active);
      }
      //  else {
      //   reveals[i].classList.remove(styles.active);
      // }
    }
  };

  window.addEventListener("scroll", reveal);

  return (
    <div className={styles.mainContainerStyle}>
      <div className={styles.contentStyle}>
        <div className={styles.imgContainerStyle}>
          <img src={beers} className={styles.imgStyle} />
        </div>
        <h2
          id="reveal"
          className={[styles.titleTextStyle, styles.reveal].join(" ")}
        >
          en brygghall – två bryggerier i hjärtat av kullabygden
        </h2>
        <div
          id="reveal"
          className={[styles.descTextStyle, styles.reveal].join(" ")}
        >
          <p className={styles.topDescTextStyle}>
            Varmt välkommen till Brygghallen – en annan del av Höganäs
          </p>
          Brygghallen i Höganäs är en unik destination för alla ölälskare. Här
          har Viken Bryggeri och Kullens Bryggeri slagit sina pålar ihop och
          skapat ett gemensamt taproom för ölentusiaster och folk som vill njuta
          av det god öl, god mat och gott snack!
        </div>
      </div>
      <Link
        to={
          "https://www.youtube.com/watch?v=QmZy1GWrTtk&feature=em-share_video_user"
        }
        target="_blank"
        className={styles.largeImgStyle}
      >
        {/* <img src={largebeer} className={styles.imgStyle} /> */}
        <video
          className={styles.largeBeerVideoStyle}
          loop={2}
          play
          muted
          playsInline
          autoPlay={true}
          controls={false}
        >
          <source src={video} type="video/mp4"></source>
        </video>
      </Link>
      {/* <div className={styles.contentStyle}>
        <div className={styles.imgContainerStyle}>
          <img src={beers} className={styles.imgStyle} />
        </div>
        <h2 className={styles.titleTextStyle}>
          en brygghall – två bryggerier i hjärtat av kullabygden
        </h2>
        <p className={styles.descTextStyle}>
          <span className={styles.topDescTextStyle}>
            Varmt välkommen till Brygghallen – en annan del av Höganäs
          </span>
          &nbsp; Brygghallen i Höganäs är en unik destination för alla
          ölälskare. Här har Viken Bryggeri och Kullens Bryggeri slagit sina
          pålar ihop och skapat ett gemensamt taproom för ölentusiaster och folk
          som vill njuta av det god öl, god mat och gott snack!
        </p>
      </div> */}
    </div>
  );
};

export default LargeBeer;
