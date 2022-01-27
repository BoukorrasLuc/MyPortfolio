// Components
import Hero from "../../Components/Hero/Hero";

// Images
import Luc from "../../Asset/Image/Boukorras Luc - Développeur React (2).jpg";

const Home = () => {
  return (
    <div className="home">
      <Hero Luc={Luc} />
    </div>
  );
};

export default Home;
