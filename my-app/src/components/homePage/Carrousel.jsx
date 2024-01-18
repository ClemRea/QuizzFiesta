import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function Carrousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const prevImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="avatar_container_flex">
      <div className="avatar_container">
        <FontAwesomeIcon
          icon={faCaretUp}
          className="fleche fleche_gauche"
          onClick={prevImage}
        />
        <img
          src={slides[current]}
          alt={`Avatar ${current}`}
          className="avatar_img"
        />
        <FontAwesomeIcon
          icon={faCaretUp}
          className="fleche fleche_droite"
          onClick={nextImage}
        />
      </div>
    </div>
  );
}

export default Carrousel;
