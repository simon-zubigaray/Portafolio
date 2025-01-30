import PropTypes from "prop-types";
import "../styles/softSkillCard-style.css";

function SoftSkillCard({ title, description, icon, bgColor }) {
  const style = {
    backgroundColor: bgColor,
  };
  
  return (
    <main style={style} className="soft-skill-card">
      <section>
        <div>
          <img src={icon} alt="" />
          <h2>{title}</h2>
        </div>

        <p>{description}</p>
      </section>
    </main>
  );
}

SoftSkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default SoftSkillCard;
