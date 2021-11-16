// Scss
import "./ProjectList.scss";

// Data
import { PortfolioData } from "../../Data/PortfolioData";

// Components
import Project from "../Project/Project";

const ProjectList = () => {
  return (
    <div className="projectListContent">
      <div className="projects">
        {PortfolioData.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectList;
