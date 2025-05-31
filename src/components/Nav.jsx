import Logo from "../images/logos/logo.png";
import Espana from "../images/logos/iconoEspana.png";
import Eeuu from "../images/logos/iconoEstadosUnidos.png";
import "../styles/nav-style.css";
import { useTranslation } from "react-i18next";

function Nav() {
  const { t,i18n } = useTranslation();
  return (
    <nav className="navbar">
      <a href="#App">
        <img src={Logo} alt="Logo de la pagina" />
      </a>
      <ul className="list-of-items">
        <li className="nav-item">
          <a href="#App">{t("nav-start")}</a>
        </li>
        <li className="nav-item">
          <a href="#about-me">{t("nav-about-me")}</a>
        </li>
        <li className="nav-item">
          <a href="#technologies">{t("nav-technologies")}</a>
        </li>
        <li className="nav-item">
          <a href="#proyects">{t("nav-projects")}</a>
        </li>
        <li className="nav-item">
          <a href="#soft-skills">{t("nav-soft-skills")}</a>
        </li>
        <li className="nav-item">
          <a href="#contact">{t("nav-contact")}</a>
        </li>
      </ul>
      <section className="languages-section">
        <a onClick={() => i18n.changeLanguage("es")}><img src={Espana} alt="Bandera de España" className="language language-spanish" /></a>
        <a onClick={() => i18n.changeLanguage("en")}><img src={Eeuu} alt="Bandera de los Estados Unidos de America" className="language language-english" /></a>
      </section>
    </nav>
  );
}

export default Nav;
