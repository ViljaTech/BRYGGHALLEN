import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import menu from "../../assets/images/menu.svg";
import { useRef } from "react";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    }

    // Add event listener to document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const scrollToSection = id => {
    // const ele = document.getElementById(id);
    // window.scrollTo(ele.offsetLeft, ele.offsetTop - 100);
    document.getElementById(id).scrollIntoView();
    setToggle(false);
  };
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
        <a href="#BOKAPRIVATAFESTER" className={styles.optionsTextStyle}>
          BOKA DIN FEST
        </a>
        <a href="#ÖPPETIDER" className={styles.optionsTextStyle}>
          ÖPPETTIDER
        </a>
      </div>
      <div
        className={styles.menuImgContainerStyle}
        onClick={() => setToggle(true)}
      >
        <img src={menu} className={styles.menuImgStyle} />
      </div>
      {toggle && (
        <div className={styles.togggleMenuContainerStyles} ref={menuRef}>
          <div>
            <p
              className={styles.menuLinkStyles}
              onClick={() => {
                scrollToSection("MENY");
              }}
            >
              MENY
            </p>
            <p
              className={styles.menuLinkStyles}
              onClick={() => scrollToSection("KOMMANDEEVENTS")}
            >
              KOMMANDE EVENTS
            </p>
            <p
              className={styles.menuLinkStyles}
              onClick={() => scrollToSection("BOKAVISNING")}
            >
              BOKA VISNING & ölPRÖVNING
            </p>
            <p
              className={styles.menuLinkStyles}
              onClick={() => {
                scrollToSection("BOKAPRIVATAFESTER");
              }}
            >
              BOKA PRIVATA FESTER
            </p>
            <p
              className={styles.menuLinkStyles}
              onClick={() => {
                scrollToSection("ÖPPETIDER");
              }}
            >
              ÖPPETTIDER
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
