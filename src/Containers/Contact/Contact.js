// Scss
import "./Contact.scss";

// Function
import sendEmail from "../../Function/sendEmail";

const Contact = () => {
  return (
    <section className="App-Contact">
      <div className="title">Travaillons ensemble ?</div>

      <div className="section-content">
        <section className="sectionFourLeft">
          <div className="title">Écrivez-moi !</div>

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
          <div>Email</div>
          <div>l.boukorras@gmail.com</div>
          <div>Téléphone</div>
          <div>06&ensp;19&ensp;96&ensp;84&ensp;49</div>
          <div className="socialNetwork">
            <a
              href="https://www.linkedin.com/in/luc-boukorras"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="https://github.com/BoukorrasLuc"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square fa-2x"></i>
            </a>
            <a
              href="https://twitter.com/LucBoukorras"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
          </div>

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
