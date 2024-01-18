import React from "react";
import HomePageBtn from "./btn";
import JoinGameInput from "./joinGmameInput";
import NameInput from "./nameInput";
import Carrousel from "./Carrousel";
import "../../style/homePage/play_card.css";

function PlayCard() {
  const AvatarCarrousel = () => {
    const avatarImages = [
      "../../assets/bibouzPNG",
      "../../assets/piratePNG",
      "../../assets/cassouPNG",
    ];
    return <Carrousel slides={avatarImages} />;
  };

  return (
    <div className="play_card_container">
      <div className="play_card">
        <h1 className="titre_h1">play</h1>
        {/* <div className="avatar_container_flex">
          <div className="avatar_container">
            <FontAwesomeIcon
              icon={faCaretUp}
              className="fleche fleche_gauche"
            />
            <FontAwesomeIcon
              icon={faCaretUp}
              className="fleche fleche_droite"
            />
          </div>
        </div> */}
        <AvatarCarrousel />
        <NameInput />
        <HomePageBtn />
        <JoinGameInput />
      </div>
    </div>
  );
}

export default PlayCard;
