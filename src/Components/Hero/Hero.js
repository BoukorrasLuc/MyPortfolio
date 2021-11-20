// Scss
import "./Hero.scss";

const Hero = ({ Luc }) => {
  return (
    <div className="hero">
      <div className="content">
        <span className="contentSpanOn">
          <img src={Luc} alt="Boukorras Luc" />
        </span>

        <span className="contentSpanTwo">
          <div className="contentEffectRound">
            <span>
              Bonjour,<br></br>
              <br></br> <span>Je suis Luc BOUKORRAS.</span>
            </span>
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
