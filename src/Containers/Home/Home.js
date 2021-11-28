// Scss
import "./Home.scss";

// Components
import Hero from "../../Components/Hero/Hero";

// Images
import Luc from "../../Asset/Image/luc-re-edit.jpg";

const Home = () => {
  return (
    <div className="home">
      <Hero Luc={Luc} />
    </div>
  );
};

export default Home;
