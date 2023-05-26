import React, { useState } from "react";
import styles from "./styles.module.css";
import Header from "../../components/header/Header";
import LargeBeer from "../../components/largeBeer/LargeBeer";
import Categories from "../../components/categories/Categories";
import MENY from "../../assets/images/meny.svg";
import KOMMANDEEVENTS from "../../assets/images/KOMMANDEEVENTS.svg";
import BOKAVISNING from "../../assets/images/BOKAVISNING.svg";
import BOKAPRIVATAFESTER from "../../assets/images/BOKAPRIVATAFESTER.svg";
import Oppetider from "../../components/oppetider/Oppetider";
import Footer from "../../components/footer/Footer";
import SocialMedial from "../../components/socialmedia/SocialMedial";
import map from "../../assets/images/map.png";
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const ManyDetails = [
    {
      name: "PHILLY CHEESESTEAK",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "HETA RÄKOR",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "GRILLED CHICKEN TACOS",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "FILIPINO BBQ PORK SKEWERS",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "PINSA",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
    {
      name: "PANINI",
      currency: "120 KR",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];
  let Data = [
    { id: 1, name: "MENY", img: MENY, key: "MENY", details: ManyDetails },
    {
      id: 2,
      name: "KOMMANDE EVENTS",
      img: KOMMANDEEVENTS,
      key: "KOMMANDEEVENTS",
      details: [
        {
          desc: "Stay tuned! Här lägger vi upp events och liveuppträde när det blir dags!",
        },
      ],
    },
    {
      id: 3,
      name: "BOKA VISNING & ölPRÖVNING ",
      img: BOKAVISNING,
      key: "BOKAVISNING",
      details: [
        { desc: "Ölprövning och visning av Bryggeriet 250:-/pers" },
        { desc: "Större sällskap vänligen förboka, boka@brygghallen.com" },
      ],
    },
    {
      id: 4,
      name: "BOKA PRIVATA FESTER",
      img: BOKAPRIVATAFESTER,
      key: "BOKAPRIVATAFESTER",
      details: [
        {
          desc: "Boka Brygghallen för privata fester och events. Lokalen tar upp till 130 personer inomhus och har även större uteplats under sommaren.",
        },
      ],
    },
  ];

  const handleIndex = id => {
    if (selectedOption === id) {
      setSelectedOption(0);
    } else {
      setSelectedOption(id);
    }
  };

  const renderMapView = () => {
    return (
      <div className={styles.mapContainerSTyle}>
        <img src={map} className={styles.mapImgStyles} />
      </div>
    );
  };
  return (
    <div className={styles.mainContainerStyle}>
      <Header />
      <LargeBeer />
      <div className={styles.categoryContainerStyle}>
        {Data.map((data, index) => (
          <Categories
            Data={data}
            index={index}
            activeIndex={selectedOption}
            OnClick={() => handleIndex(data.id)}
          />
        ))}
      </div>
      <Oppetider />
      <SocialMedial />
      {renderMapView()}
      <Footer />
    </div>
  );
};

export default Home;
