// Scss
import "./Contact.scss";

// Function
import sendEmail from "../../Function/sendEmail";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="App-Contact">
      <h1 className="title">Travaillons ensemble ?</h1>

      <div className="section-content">
        <section className="sectionFourLeft">
          <h2 className="title">Écrivez-moi !</h2>

          <form className="contact-form" onSubmit={sendEmail}>
            <label>Nom</label>
            <input type="text" name="name" required={true} />
            <label>Email</label>
            <input type="email" name="email" required={true} />
            <label>Sujet</label>
            <input type="text" name="subject" required={true} />
            <label>Message</label>
            <textarea name="message" required={true} />
            <div className="none"></div>
            <div className="btn btn-one">
              <input
                type="submit"
                value="Contactez-moi"
                className="button-send"
              />
            </div>
          </form>
        </section>
        <section className="sectionFourRight">
          <p>Email</p>
          <p>l.boukorras@gmail.com</p>
          <p>Téléphone</p>
          <p>06&ensp;19&ensp;96&ensp;84&ensp;49</p>
          <p className="socialNetwork">
            <a
              href="https://www.linkedin.com/in/luc-boukorras"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/BoukorrasLuc"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://twitter.com/LucBoukorras"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </p>

          <div className="btn btn-one">
            <a href="./Media/BoukorrasLucCv.pdf" target="_blank" className="cv">
              Télécharger CV
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
