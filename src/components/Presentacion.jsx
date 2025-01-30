import Github from "../images/logos/iconoGithub.png";
import Linkedin from "../images/logos/iconoLinkedin.png";
import FotoPersonal from "../images/exampleImg.jpg";
import "../styles/presentacion-style.css";

function Presentacion() {
  return (
    <div className="main-container-presentacion">
      <main className="main-presentacion">
        <h4 className="subtitle">Hola! Soy</h4>
        <h1 className="title">
          <span className="first-letter">J</span>uan{" "}
          <span className="first-letter">S</span>imon{" "}
          <span className="first-letter">Z</span>ubigaray
        </h1>
        <p className="brief-description">
          Soy un desarrollador full stack apasionado por crear soluciones
          tecnológicas innovadoras y escalables. Con experiencia tanto en
          frontend como en backend, me especializo en construir aplicaciones
          web.
        </p>
        <section className="presentation-button-group">
          <a href="/public/CV_Juan_Simon_Zubigaray.pdf" download="CV_Juan_Simon_Zubigaray.pdf">
            <button className="presentation-button btnfos-4">Descargar CV</button>
          </a>
          <a href="">
            {" "}
            <button className="presentation-button btnfos-4">
              <img src={Github} alt="" />
              GitHub
            </button>
          </a>
          <a href="">
            {" "}
            <button className="presentation-button btnfos-4">
              <img src={Linkedin} alt="" />
              LinkedIn
            </button>
          </a>
        </section>
      </main>
      <aside>
        <img src={FotoPersonal} alt="" />
      </aside>

    </div>
  );
}

export default Presentacion;
