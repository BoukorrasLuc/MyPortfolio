// Packages
import emailjs from "emailjs-com";

export default function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_waryssm",
      "template_5alxvyk",
      e.target,
      "user_Ih9KTpnX7MQBNgs85rpG0"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}
