// Scss
import "./ProgressBarLanguages.scss";

const ProgressBarLanguages = ({ className, title, languages }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="yearsLanguages">
        <span>Années d'experience</span>
        <span>6 mois</span>
        <span>1 an</span>
      </div>
      <div>
        {languages.map((item) => {
          let Years = 2;
          let progressBar = (item.xp / Years) * 100 + "%";

          return (
            <div key={item.id} className="languagesList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBarLanguages;
