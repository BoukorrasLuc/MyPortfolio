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
              <br></br> <span>Je suis Luc BOUKORRAS,</span>
            </h1>
            <p id="typing-text">&ensp;&ensp;</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Hero;
