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
    },
    {
      src: SpiderManPage,
      title: "Spider-Man Game Page",
      description:
        "Segundo proyecto hecho con mi compañero @ggonza12 para la materia Interfaces de usuario e interaccion de la carrera TUDAI en la UNICEN.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  /*La función toma el valor anterior de currentIndex (prevIndex) y le suma 1, luego toma el resultado y usa el operador módulo (%) con la longitud del array items (items.length). 
  Esto asegura que el índice vuelva al principio cuando alcance el final del array, creando un ciclo continuo.*/
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  /*La función toma el valor anterior de currentIndex (prevIndex) y le resta 1, luego suma la longitud del array items (items.length) y usa el operador módulo (%) con la longitud del array. 
  Este enfoque asegura que el índice vuelva al final del array si es menor que 0, permitiendo un ciclo continuo hacia atrás.*/
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
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
        <section className="carousel-card">
          <img src={items[currentIndex].src} alt={items[currentIndex].title} />
          <section className="data-card-carousel">
            <a href="">
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
