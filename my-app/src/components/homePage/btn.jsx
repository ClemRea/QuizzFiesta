import "../../style/homePage/home_page_btn.css";

function HomePageBtn() {
  return (
    <div className="btn_container">
      <button className="rules_btn btn"> Règles</button>
      <button className="create_game_btn btn">Créer une partie</button>
      <button className="join_game_btn btn">Rejoindre une partie</button>
    </div>
  );
}

export default HomePageBtn;
