import SeparatingLine from "../images/lineaSeparadora.png";
import WhatsAppIcon from "../images/logos/iconoWhatsApp.png";
import GmailIcon from "../images/logos/iconoGmail.png";
import "../styles/contact-style.css";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <main className="main-contact">
      <div className="separating-line" id="contact">
        <img src={SeparatingLine} alt="" />
      </div>
      <h2>{t("contact.description-title")}</h2>
      <section className="section-contact">
        <p>
          {t("contact.description-contact-1")}
          <p>{t("contact.description-contact-2")}</p>
        </p>
        <section className="presentation-button-group">
          <a href="https://wa.me/5492494548277">
            <button className="presentation-button btnfos-4">
              <img src={WhatsAppIcon} alt="" />
              WhatsApp
            </button>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=zubigarayjuansimon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="presentation-button btnfos-4">
              <img src={GmailIcon} alt="" />
              Gmail
            </button>
          </a>
        </section>
      </section>
    </main>
  );
}

export default Contact;
