import Github from "../images/logos/iconoGithub.png";
import Linkedin from "../images/logos/iconoLinkedin.png";
import FotoPersonal from "../images/foto-perfil.png";
import "../styles/presentacion-style.css";
import { useTranslation } from "react-i18next";

function Presentacion() {
  const { t } = useTranslation();
  return (
    <div className="main-container-presentacion">
      <main className="main-presentacion">
        <h4 className="subtitle">{t("presentacion-subtitle")}</h4>
        <h1 className="title">
          <span className="first-letter">J</span>uan{" "}
          <span className="first-letter">S</span>imon{" "}
          <span className="first-letter">Z</span>ubigaray
        </h1>
        <p className="brief-description">{t("presentacion-brief-description")}</p>
        <section className="presentation-button-group">
          <a href="/public/CV_Juan_Simon_Zubigaray.pdf" download="CV_Juan_Simon_Zubigaray.pdf">
            <button className="presentation-button btnfos-4">{t("presentacion-download-cv")}</button>
          </a>
          <a href="https://github.com/simon-zubigaray" target="_blank">
            {" "}
            <button className="presentation-button btnfos-4">
              <img src={Github} alt="" />
              GitHub
            </button>
          </a>
          <a href="https://www.linkedin.com/in/zubigarayjuansimon/" target="_blank">
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
