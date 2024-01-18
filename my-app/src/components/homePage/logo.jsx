import LogoPng from "../../assets/logo.png";
import "../../style/homePage/logo.css";
import "../../style/utils/variables.css";

function Logo() {
  return (
    <div className="logo_container">
      <figure className="logo_container_figure">
        <img className="logo_container_img" src={LogoPng} alt="QuizzFiesta" />
      </figure>
    </div>
  );
}

export default Logo;
