import Card from "./Card";
import IconoHtml from "../images/logos/iconoHtml.png";
import IconoCss from "../images/logos/iconoCss.png";
import IconoBootstrap from "../images/logos/iconoBootstrap.png";
import IconoTailwind from "../images/logos/iconoTailWindCSS.png";
import IconoJavaScript from "../images/logos/iconoJavaScript.png";
import IconoReact from "../images/logos/iconoReact.png";
import SeparatingLine from "../images/lineaSeparadora.png";
import IconoJava from "../images/logos/iconoJava.png";
import IconoSpringboot from "../images/logos/iconoSpringboot.png";
import IconoPhp from "../images/logos/iconoPhp.png";
import IconoLaravel from "../images/logos/iconoLaravel.png";
import IconoGit from "../images/logos/iconoGit.png";
import IconoDocker from "../images/logos/iconoDocker.png";
import IconoMySql from "../images/logos/iconoMysql.png";
import IconoPostgreSql from "../images/logos/iconoPostgresql.png";
import IconoSqLite from "../images/logos/iconoSqlite.png";
import IconoMongoDB from "../images/logos/iconoMongodb.png";
import "../styles/technologies-style.css";
import { useTranslation } from "react-i18next";

function Technologies() {

  const { t } = useTranslation();

  const frontendTechnologies = [
    {
      id: 1,
      name: "HTML",
      description: t("html-description"),
      icon: IconoHtml,
    },
    {
      id: 2,
      name: "CSS",
      description: t("css-description"),
      icon: IconoCss,
    },
    {
      id: 3,
      name: "Bootstrap",
      description: t("bootstrap-description"),
      icon: IconoBootstrap,
    },
    {
      id: 4,
      name: "TailWindCSS",
      description: t("tailwind-description"),
      icon: IconoTailwind,
    },
    {
      id: 5,
      name: "JavaScript",
      description: t("javascript-description"),
      icon: IconoJavaScript,
    },
    {
      id: 6,
      name: "React",
      description: t("react-description"),
      icon: IconoReact,
    },
  ];
  
  const backendTechnologies = [
    {
      id: 1,
      name: "Java",
      description: t("java-description"),
      icon: IconoJava,
    },
    {
      id: 2,
      name: "Springboot",
      description: t("springboot-description"),
      icon: IconoSpringboot,
    },
    {
      id: 3,
      name: "PHP",
      description: t("php-description"),
      icon: IconoPhp,
    },
    {
      id: 4,
      name: "Laravel",
      description: t("laravel-description"),
      icon: IconoLaravel,
    },
  ];
  
  const otherTools = [
    {
      id: 1,
      name: "GIT",
      description: t("git-description"),
      icon: IconoGit,
    },
    {
      id: 2,
      name: "Docker",
      description: t("docker-description"),
      icon: IconoDocker,
    },
    {
      id: 3,
      name: "MySQL",
      description: t("mysql-description"),
      icon: IconoMySql,
    },
    {
      id: 4,
      name: "PostgreSQL",
      description: t("postgresql-description"),
      icon: IconoPostgreSql,
    },
    {
      id: 5,
      name: "SQLite",
      description: t("sqlite-description"),
      icon: IconoSqLite,
    },
    {
      id: 6,
      name: "MongoDB",
      description: t("mongodb-description"),
      icon: IconoMongoDB,
    },
  ];  

  return (
    <main className="main-container-technologies">
      <section className="section-container-technologies">
      <div className="separating-line" id="technologies"><img src={SeparatingLine} alt="" /></div>
        <h2>{t("technologies-title")}</h2>
        <h3 className="spacing-title">{t("technologies-frontend-title")}</h3>
        <section className="technologies-tools-languages">
          {frontendTechnologies.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
        <h3 className="spacing-title">{t("technologies-backend-title")}</h3>
        <section className="technologies-tools-languages">
        {backendTechnologies.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
        <h3  className="spacing-title">{t("technologies-other-tools")}</h3>
        <section className="technologies-tools-languages">
        {otherTools.map(({ id, name, description, icon }) => (
            <Card key={id} name={name} description={description} icon={icon} />
          ))}
        </section>
      </section>
    </main>
  );
}

export default Technologies;
