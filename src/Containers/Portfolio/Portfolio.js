// Scss
import "./Portfolio.scss";

// Components
import ProjectList from "../../Components/ProjectList/ProjectList";

const Portfolio = () => {
  return (
    <section className="App-sectionThree">
      <h1 className="sectionThreetitle">Portfolio</h1>
      <div className="App-projet">
        <ProjectList />
      </div>
    </section>
  );
};

export default Portfolio;
