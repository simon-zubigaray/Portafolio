import SeparatingLine from "../images/lineaSeparadora.png";
import WhatsAppIcon from "../images/logos/iconoWhatsApp.png";
import GmailIcon from "../images/logos/iconoGmail.png";
import "../styles/contact-style.css";

function Contact() {
  return (
    <main className="main-contact">
      <div className="separating-line" id="contact">
        <img src={SeparatingLine} alt="" />
      </div>
      <h2>Contacto —</h2>
      <section className="section-contact">
        <p>
          Si eres un empleador, reclutador o estás interesado en explorar
          oportunidades laborales, estaré encantado de conectar contigo. Estoy
          abierto a considerar roles en empresas o startups donde pueda aportar
          valor y continuar desarrollándome profesionalmente.
          <p>No dudes en contactarme a través de los siguientes medios:</p>
        </p>
        <section className="presentation-button-group">
          <a href="">
            {" "}
            <button className="presentation-button btnfos-4">
              <img src={WhatsAppIcon} alt="" />
              WhatsApp
            </button>
          </a>
          <a href="">
            {" "}
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
