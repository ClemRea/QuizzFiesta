import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import "../../style/homePage/caroussel.css";

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
        {current !== length - 1 && (
          <FontAwesomeIcon
            icon={faCaretUp}
            className="fleche fleche_gauche"
            onClick={prevImage}
          />
        )}
        <figure className="avatar_figure">
          {slides.map((slide, i) => (
            <img
              src={slide}
              alt={`Avatar ${i}`}
              className="avatar_img"
              style={{
                transform: `translateX(${-current * 182}px)`,
              }}
              key={i}
            />
          ))}
        </figure>
        {current !== 0 && (
          <FontAwesomeIcon
            icon={faCaretUp}
            className="fleche fleche_droite"
            onClick={nextImage}
          />
        )}
      </div>
    </div>
  );
}

export default Carrousel;
