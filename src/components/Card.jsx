import PropTypes from "prop-types";
import { useState } from "react";

import "../styles/card-style.css";
import CollapseArrow from "../images/collapseArrow.png";
import ExpandArrow from "../images/expandArrow.png";


function Card({ name, description, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="main-card">
      <section>
        <details onToggle={handleToggle}>
          <summary>
            <img src={icon} alt="" />
            <h3>{name}</h3>
            <figure>
              <img src={isOpen ? ExpandArrow : CollapseArrow} alt="" />
            </figure>
          </summary>
          <div>
          {isOpen && <p>{description}</p>}{" "}
          </div>
        </details>
      </section>
    </main>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Card;
