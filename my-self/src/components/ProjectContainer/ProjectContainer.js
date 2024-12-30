import React from 'react';
import Project from "../Project/Project";
import "./ProjectContainer.css";
import { Element } from "react-scroll";
import img1 from "../../asset/project2.png";
import img2 from "../../asset/project1.png";


const ProjectContainer = () => {
    const client_projects =[
        {
      img: img1,
      title: "Zinger ERP Solution",
      desc:
        "Automate your Jewellery operations & manage your business efficiently!.",
      link: "https://rj.prod-rasiinfotech.in",
        },
        {
            img: img2,
            title: "eNProject",
            desc:
              "Project Management Platform Build to increase Protectivity and Collabration between Teams and Clients.",
            link: "https://app.enproject.in",
        }
    ]
  return (
      <Element className="projectContainer" id="projects">
        <h1>Project</h1>
        <p>Here are some Project Which I done for making lives of people easy</p>
        <div className='projectContainer__title'>
        {client_projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              desc={project.desc}
              title={project.title}
              link={project.link}
            />
          ))}

        </div>
      </Element>
  )
}

export default ProjectContainer
