import "../styles/aboutMe-style.css";
import SeparatingLine from "../images/lineaSeparadora.png";

function AboutMe() {
  return (
    <main className="main-container-about-me">
      <section className="section-container-about-me">
        <div className="separating-line" id="about-me"><img src={SeparatingLine} alt="" /></div>
        <h2 >Sobre Mi —</h2>
        <section className="group-of-sentences">
          <p className="sentence">
            Soy un joven profesional de 25 años, originario de Tandil, Buenos
            Aires, con una sólida formación técnica y académica en el ámbito de
            la informática.
          </p>
          <p className="sentence">
            Actualmente, me encuentro cursando la Tecnicatura Universitaria en
            Desarrollo de Aplicaciones Informáticas (TUDAI) en la Facultad de
            Ciencias Exactas de la Universidad Nacional del Centro de la
            Provincia de Buenos Aires (UNICEN), donde estoy adquiriendo
            conocimientos avanzados en desarrollo de software y aplicaciones.
          </p>
          <p className="sentence">
            Previamente, me gradué como Técnico Informático en la Escuela de
            Educación Secundaria Técnica N°2, donde consolidé una base técnica
            sólida y habilidades prácticas en el campo de la informática.
          </p>
        </section>
      </section>
    </main>
  );
}

export default AboutMe;
