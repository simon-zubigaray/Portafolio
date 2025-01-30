import Logo from "../images/logos/logo.png";
import Espana from "../images/logos/iconoEspana.png";
import Eeuu from "../images/logos/iconoEstadosUnidos.png";
import "../styles/nav-style.css";

function Nav() {
  return (
    <nav className="navbar">
      <a href="#App">
        <img src={Logo} alt="Logo de la pagina" />
      </a>
      <ul className="list-of-items">
        <li className="nav-item">
          <a href="#App">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="#about-me">Sobre Mi</a>
        </li>
        <li className="nav-item">
          <a href="#technologies">Tecnologias</a>
        </li>
        <li className="nav-item">
          <a href="#proyects">Proyectos</a>
        </li>
        <li className="nav-item">
          <a href="#soft-skills">Habilidades Blandas</a>
        </li>
        <li className="nav-item">
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <section className="languages-section">
        <img src={Espana} alt="Bandera de España" />
        <img src={Eeuu} alt="Bandera de los Estados Unidos de America" />
      </section>
    </nav>
  );
}

export default Nav;
