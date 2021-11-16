// Scss
import "./Home.scss";

// Components
import Hero from "../../Components/Hero/Hero";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";

// Images
import Luc from "../../Asset/Image/luc-re-edit.jpg";

const Home = () => {
  return (
    <div className="home">
      <Hero
        FontAwesomeIcon={FontAwesomeIcon}
        faArrowAltCircleDown={faArrowAltCircleDown}
        Luc={Luc}
      />
    </div>
  );
};

export default Home;
