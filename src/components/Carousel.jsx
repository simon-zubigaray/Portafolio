import { useState } from "react";
import "../styles/carousel-style.css";
import GamesHeaven from "../images/proyects/page1.png";
import SpiderManPage from "../images/proyects/page2.png";
import LeftButton from "../images/LeftButton.png";
import RightButton from "../images/RightButton.png";
import SeparatingLine from "../images/lineaSeparadora.png";

const Carousel = () => {
  const items = [
    {
      src: GamesHeaven,
      title: "Games Heaven",
      description:
        "Primer proyecto hecho con mi compañero @ggonza12 para la materia Interfaces de usuario e interaccion de la carrera TUDAI en la UNICEN.",
      link: "https://zubigaray24.github.io/Proyectos-con-html-css-js/GamesHaven/index.html",
    },
    {
      src: SpiderManPage,
      title: "Spider-Man Game Page",
      description:
        "Segundo proyecto hecho con mi compañero @ggonza12 para la materia Interfaces de usuario e interaccion de la carrera TUDAI en la UNICEN.",
      link: "https://zubigaray24.github.io/Proyectos-con-html-css-js/SpiderMan%20Game%20Page/index.html",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      setIsAnimating(false);
    }, 100);
  };

  const prevSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
      setIsAnimating(false);
    }, 100);
  };

  return (
    <main className="carousel-main">
      <div className="separating-line" id="proyects">
        <img src={SeparatingLine} alt="" />
      </div>
      <h2>Proyectos —</h2>
      <section className="carousel">
        <img
          src={LeftButton}
          onClick={prevSlide}
          className="carousel-button prev-button"
        />
        <section className={`carousel-card ${isAnimating ? "fade-in" : ""}`}>
          <a href={items[currentIndex].link} target="_blank">
            <img src={items[currentIndex].src} alt={items[currentIndex].title} />
          </a>
          <section className="data-card-carousel">
            <a href={items[currentIndex].link}>
              <h3 className="title-card-carousel">
                {items[currentIndex].title}
              </h3>
            </a>
            <p className="description-card-carousel">
              {items[currentIndex].description}
            </p>
          </section>
        </section>
        <img
          src={RightButton}
          onClick={nextSlide}
          className="carousel-button next-button"
        />
      </section>
    </main>
  );
};

export default Carousel;
