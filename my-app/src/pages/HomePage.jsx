import Logo from "../components/homePage/logo";
import PlayCard from "../components/homePage/playCard";
import "../style/homePage/home_page.css";

function HomePage() {
  return (
    <div className="home_page">
      <Logo />
      <PlayCard />
    </div>
  );
}

export default HomePage;
