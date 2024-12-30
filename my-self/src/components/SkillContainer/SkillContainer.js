import React from 'react';
import {Element} from "react-scroll";
import skillImg from "../../asset/skills.jpg"
import "./SkillContainer.css";
import LinearProgress from "@material-ui/core/LinearProgress"

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skillContainer__image'>
        <img src={skillImg} alt="" />
        </div>
        <div className='skillContainer_text'>
        <h2>SKILLSET</h2>
        <div className="skillContainer__skillSet">
          <h5>JavaScript</h5>
          <div className="skillContainer__slider skillContainer__slider1">
            <LinearProgress variant="determinate" value={90} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>React</h5>
          <div className="skillContainer__slider skillContainer__slider2">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>HTML</h5>
          <div className="skillContainer__slider skillContainer__slider3">
            <LinearProgress variant="determinate" value={75} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>CSS</h5>
          <div className="skillContainer__slider skillContainer__slider4">
            <LinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="skillContainer__skillSet">
          <h5>Bootstrap</h5>
          <div className="skillContainer__slider skillContainer__slider5">
            <LinearProgress variant="determinate" value={75} />
          </div>
          <div className="skillContainer__skillSet">
          <h5>Quality Assurance</h5>
          <div className="skillContainer__slider skillContainer__slider6">
            <LinearProgress variant="determinate" value={88} />
          </div>
        </div>
        </div>
        </div>
    </Element>
  )
}

export default SkillContainer
