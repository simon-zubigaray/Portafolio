import "../styles/aboutMe-style.css";
import SeparatingLine from "../images/lineaSeparadora.png";
import { useTranslation } from "react-i18next";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <main className="main-container-about-me">
      <section className="section-container-about-me">
        <div className="separating-line" id="about-me"><img src={SeparatingLine} alt="" /></div>
        <h2>{t("aboutMe-title")}</h2>
        <section className="group-of-sentences">
          <p className="sentence">{t("aboutMe-description-about-me-1")}</p>
          <p className="sentence">{t("aboutMe-description-about-me-2")}</p>
          <p className="sentence">{t("aboutMe-description-about-me-3")}</p>
        </section>
      </section>
    </main>
  );
}

export default AboutMe;
