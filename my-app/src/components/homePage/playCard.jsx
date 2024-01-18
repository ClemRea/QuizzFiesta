import React from "react";
import HomePageBtn from "./btn";
import JoinGameInput from "./joinGmameInput";
import NameInput from "./nameInput";
import Carrousel from "./Carrousel";
import bibouz from "../../assets/bibouzPNG.png";
import cassou from "../../assets/cassouPNG.png";
import pirate from "../../assets/piratePNG.png";
// import robot from "../../assets/robot.jpg";
import "../../style/homePage/play_card.css";

function PlayCard() {
  const AvatarCarrousel = () => {
    const avatarImages = [pirate, bibouz, cassou];
    return <Carrousel slides={avatarImages} />;
  };

  return (
    <div className="play_card_container">
      <div className="play_card">
        <h1 className="titre_h1">play</h1>
        <AvatarCarrousel />
        <NameInput />
        <HomePageBtn />
        <JoinGameInput />
      </div>
    </div>
  );
}

export default PlayCard;
