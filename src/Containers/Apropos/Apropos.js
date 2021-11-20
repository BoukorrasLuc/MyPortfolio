// Scss
import "./Apropos.scss";

// Packages
import dateFormat from "dateformat";
import { Fragment } from "react/cjs/react.development";

// Components
import SectionOneSousinfo from "../../Components/SectionOneSousInfo/SectionOneSousInfo";
import ProgressBarLanguages from "../../Components/ProgressBar/ProgressBarLanguages";
import ProgressBarFrameworks from "../../Components/ProgressBar/ProgressBarFrameworks";
import Logo from "../../Components/Logo/Logo";

// Images
import Luc2 from "../../Asset/Image/DSC_3042R-reedit.jpg";

// Data
import { Frameworks } from "../../Data/Frameworks";
import { Languages } from "../../Data/Languages";

const Apropos = () => {
  const date = new Date("1987-09-19T01:20:00.000+00:00");

  let dob = new Date("09/19/1987");
  //calculate month difference from current date in time
  let month_diff = Date.now() - dob.getTime();
  //convert the calculated difference in date format
  let age_dt = new Date(month_diff);
  //extract year from date
  let year = age_dt.getUTCFullYear();
  //now calculate the age of the user
  let age = Math.abs(year - 1970);

  return (
    <Fragment>
      <section className="App-sectionOne">
        <div className="sectionOneRight">
          <div className="sectionOneTitle">A propos de Moi</div>
          <div className="sectionOneLocalisation">
            Développeur fullstack basé en France
          </div>
          <div className="sectionOneText">
            Ayant toujours eu une attirance particulière pour les nouvelles
            technologies et l'informatique, j'ai tout de suite su vers quel
            domaine me tourner lorsqu'il a été question de reconversion
            professionnelle. J'avais déjà abordé sommairement le développement
            informatique pour des projets personnels, notamment liés aux jeux
            vidéo. Cela m'a conforté dans l'idée de faire une formation
            développeur web et mobile grâce à laquelle je me suis grandement
            épanoui mais également acquis un grand nombre de compétences
            supplémentaires.
          </div>
          <div className="sectionOneInfo">
            <SectionOneSousinfo
              className="sectionOneSousInfo1"
              texte="Date de naissance"
              texteTwo={dateFormat(date, `d mm yyyy`)}
            />

            <SectionOneSousinfo
              className="sectionOneSousInfo2"
              texte="Age"
              texteTwo={age}
              texteThree=" ans"
            />
            <SectionOneSousinfo
              className="sectionOneSousInfo3"
              texte="Adresse"
              texteTwo="Chateaurenard (13)"
            />

            <SectionOneSousinfo
              className="sectionOneSousInfo4"
              texte="Email"
              texteTwo="l.boukorras@gmail.com"
            />

            <SectionOneSousinfo
              className="sectionOneSousInfo5"
              texte="Téléphone"
              texteTwo="06 19 96 84 49"
            />
          </div>
        </div>
        <div className="sectionOneLeft">
          <img src={Luc2} alt="A propos de Boukorras Luc" />
        </div>
      </section>

      {/*         Section App-sectionTwo         */}

      <section className="App-sectionTwo">
        <div className="sectionTwoLeft">
          <span className="sectionTwoLeftCitation">
            "Chaque passion parle un différent langage".
          </span>
          <div className="sectionTwoLeftCitationName">Nicolas Boileau</div>
        </div>
        <div className="sectionTwoRight">
          <div className="languagesFrameworks">
            <ProgressBarLanguages
              languages={Languages}
              title="languages"
              className="languages"
            />
            <ProgressBarFrameworks
              frameworks={Frameworks}
              title="Frameworks"
              className="frameworks"
            />
          </div>
        </div>
      </section>

      {/*         Section App-sectionTwoBottomLogo         */}

      <div className="sectionTwoBottomLogo">
        <Logo />
      </div>
    </Fragment>
  );
};

export default Apropos;
