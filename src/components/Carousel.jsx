import { useState } from "react";
import "../styles/carousel-style.css";
import GamesHeaven from "../images/proyects/page1.png";
import SpiderManPage from "../images/proyects/page2.png";
import LeftButton from "../images/LeftButton.png";
import RightButton from "../images/RightButton.png";
import SeparatingLine from "../images/lineaSeparadora.png";
import { useTranslation } from "react-i18next";

const Carousel = () => {

  const { t } = useTranslation();

  const items = [
    {
      src: GamesHeaven,
      title: t("projects.games_heaven.title"),
      description: t("projects.games_heaven.description"),
      link: "https://zubigaray24.github.io/Proyectos-con-html-css-js/GamesHaven/index.html",
    },
    {
      src: SpiderManPage,
      title: t("projects.spider_man_game.title"),
      description: t("projects.spider_man_game.description"),
      link: "https://zubigaray24.github.io/Proyectos-con-html-css-js/SpiderMan%20Game%20Page/index.html",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentItem = items[currentIndex];

  const changeSlide = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCurrentIndex((prevIndex) => {
      return direction === "next"
        ? (prevIndex + 1) % items.length
        : (prevIndex - 1 + items.length) % items.length;
    });

    setTimeout(() => setIsAnimating(false), 300); // Evita spam de clicks
  };

  return (
    <main className="carousel-main">
      <div className="separating-line" id="proyects">
        <img src={SeparatingLine} alt="Línea separadora de proyectos" />
      </div>
      <h2>{t("projects.projects-title")}</h2>
      <section className="carousel">
        <img
          src={LeftButton}
          onClick={() => changeSlide("prev")}
          className="carousel-button prev-button"
          alt="Botón para ir a la imagen anterior"
          role="button"
          aria-label="Anterior"
        />
        <section className={`carousel-card ${isAnimating ? "fade-in" : ""}`}>
          <a href={currentItem.link} target="_blank" rel="noopener noreferrer">
            <img src={currentItem.src} alt={currentItem.title} />
          </a>
          <section className="data-card-carousel">
            <a href={currentItem.link} target="_blank" rel="noopener noreferrer">
              <h3 className="title-card-carousel">{currentItem.title}</h3>
            </a>
            <p className="description-card-carousel">{currentItem.description}</p>
          </section>
        </section>
        <img
          src={RightButton}
          onClick={() => changeSlide("next")}
          className="carousel-button next-button"
          alt="Botón para ir a la siguiente imagen"
          role="button"
          aria-label="Siguiente"
        />
      </section>
    </main>
  );
};

export default Carousel;
