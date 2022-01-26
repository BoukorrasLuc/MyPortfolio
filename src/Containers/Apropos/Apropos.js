// Scss
import "./Apropos.scss";

// Packages
import dateFormat from "dateformat";

// Components
import SectionOneSousinfo from "../../Components/SectionOneSousInfo/SectionOneSousInfo";
import Logo from "../../Components/Logo/Logo";

// Images
import Luc2 from "../../Asset/Image/DSC_3042R-reedit.jpg";

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
    <>
      <section className="App-sectionOne">
        <div className="sectionOneRight">
          <div className="sectionOneTitle">A propos de Moi</div>
          <div className="sectionOneLocalisation">
            Développeur React basé à Avignon.
          </div>
          <div className="sectionOneText">
            Passionné de longue date par l'informatique et les nouvelles
            technologies, j'ai décidé de me réorienter professionnellement dans
            le développement web et mobile. J'ai débuté ce changement avec une
            formation intensive auprès du Reacteur, puis d'un stage en
            entreprise. Nouvellement admis à la Wild Code School, je recherche
            actuellement un poste d'alternant au sein d'une entreprise qui
            serait intéressée par mes compétences en React, JavaScript, Html/Css
            et Node.Js .
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
              texteTwo="Avignon (84)"
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
      </section>

      {/*         Section App-sectionTwoBottomLogo         */}

      <div className="sectionTwoBottomLogo">
        <Logo />
      </div>
    </>
  );
};

export default Apropos;
