import React from "react";
import { Element } from "react-scroll";
import "./ExperienceContainer.css";
import Experience from "../ExperianceBox/Experiance";

const ExperienceContainer = () => {
  return (
    <Element className="experienceContainer" id="exp">
      <h1>Experiance</h1>
      <div className="experienceContainer__info">
        <Experience number="10+" title="Clients" />
        <Experience number="2" title="Projects" />
        <Experience number="1 Yr" title="Frontent Developer" style={{ backgroundColor: "#F9629F" }}/>
        <Experience number="1 Yr" Year title="Senior QA " />
        <Experience number="1 yr" Year title=" QA Team Lead" />
      </div>
    </Element>
  );
};

export default ExperienceContainer;