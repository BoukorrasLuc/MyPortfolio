// Scss
import "./Hero.scss";

const Hero = ({ Luc }) => {
  return (
    <div className="hero">
      <div className="content">
        <span className="contentSpanOn">
          <img src={Luc} alt="Boukorras Luc Développeur React" />
        </span>

        <span className="contentSpanTwo">
          <div className="contentEffectRound">
            <h1>
              Bonjour,<br></br>
              <br></br> <h1>Je suis Luc BOUKORRAS.</h1>
            </h1>
            <p>
              Passionné de <br></br>&ensp;&ensp;nouvelles <br></br>
              &ensp;technologies et
              <br></br> &ensp;&ensp;d'informatique...
            </p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Hero;
