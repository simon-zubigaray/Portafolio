import SoftSkillCard from "./SoftSkillCard";
import SeparatingLine from "../images/lineaSeparadora.png";
import TeamWorkImg from "../images/logos/iconoBee.png";
import ResilienceImg from "../images/logos/iconoPhoenix.png";
import AdaptabilityImg from "../images/logos/iconoChameleon.png";
import ReceptivityToCriticismImg from "../images/logos/iconoOwl.png";
import "../styles/softSkill-style.css";

export default function SoftSkills() {
  const softSkills = [
    {
      title: "Trabajo en Equipo",
      icon: TeamWorkImg,
      description:
        "He fortalecido mi habilidad para trabajar en equipo mediante experiencias colaborativas, aprendiendo la importancia de la comunicación, cooperación y empatía para lograr metas comunes. Esto me ha permitido contribuir eficazmente a los objetivos colectivos y mejorar mis relaciones interpersonales.",
      bgColor: "#F4E7D7",
    },
    {
      title: "Resiliencia",
      icon: ResilienceImg,
      description:
        "He desarrollado resiliencia al superar adversidades, aprendiendo a mantener la calma, aprender de las experiencias y seguir con determinación. Esto me ha fortalecido para afrontar futuros desafíos con una mentalidad positiva y enfocada.",
      bgColor: "#FCE9EA",
    },
    {
      title: "Adaptabilidad",
      icon: AdaptabilityImg,
      description:
        "He desarrollado adaptabilidad al enfrentar entornos cambiantes, ajustando rápidamente mis enfoques y viendo el cambio como una oportunidad para crecer y aprender continuamente.",
      bgColor: "#C8D7C0",
    },
    {
      title: "Receptividad a las criticas",
      icon: ReceptivityToCriticismImg,
      description:
        "He fortalecido mi habilidad para trabajar en equipo mediante experiencias colaborativas, aprendiendo la importancia de la comunicación, cooperación y empatía para lograr metas comunes. Esto me ha permitido contribuir eficazmente a los objetivos colectivos y mejorar mis relaciones interpersonales.",
      bgColor: "#D8E8FF",
    },
  ];

  return (
    <main className="soft-skill-main">
      <div className="separating-line" id="soft-skills">
        <img src={SeparatingLine} alt="" />
      </div>
      <h2>Habilidades Blandas —</h2>
      <section className="soft-skills">
        {softSkills.map(({ id, title, description, icon, bgColor }) => (
          <SoftSkillCard
            key={id}
            title={title}
            description={description}
            icon={icon}
            bgColor={bgColor}
          />
        ))}
      </section>
    </main>
  );
}
