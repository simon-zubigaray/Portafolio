import SoftSkillCard from "./SoftSkillCard";
import SeparatingLine from "../images/lineaSeparadora.png";
import TeamWorkImg from "../images/logos/iconoBee.png";
import ResilienceImg from "../images/logos/iconoPhoenix.png";
import AdaptabilityImg from "../images/logos/iconoChameleon.png";
import ReceptivityToCriticismImg from "../images/logos/iconoOwl.png";
import "../styles/softSkill-style.css";
import { useTranslation } from "react-i18next";

export default function SoftSkills() {
  const { t } = useTranslation();

  const softSkills = [
    {
      id: 1,
      title: t("soft_skills.teamwork.title"),
      icon: TeamWorkImg,
      description: t("soft_skills.teamwork.description"),
      bgColor: "#F4E7D7",
    },
    {
      id: 2,
      title: t("soft_skills.resilience.title"),
      icon: ResilienceImg,
      description: t("soft_skills.resilience.description"),
      bgColor: "#FCE9EA",
    },
    {
      id: 3,
      title: t("soft_skills.adaptability.title"),
      icon: AdaptabilityImg,
      description: t("soft_skills.adaptability.description"),
      bgColor: "#C8D7C0",
    },
    {
      id: 4,
      title: t("soft_skills.receptivity_to_criticism.title"),
      icon: ReceptivityToCriticismImg,
      description: t("soft_skills.receptivity_to_criticism.description"),
      bgColor: "#D8E8FF",
    },
  ];

  return (
    <main className="soft-skill-main">
      <div className="separating-line" id="soft-skills">
        <img src={SeparatingLine} alt="" />
      </div>
      <h2>{t("soft_skills.soft-skills-title")} —</h2>
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

