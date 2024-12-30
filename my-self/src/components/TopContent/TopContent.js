import React from 'react'
import { Link } from 'react-scroll';
import "./TopContent.css"

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topContent_container'>
            <h1>Keerthana Murali</h1> 
            <p>A Professional Front End Developer</p>
            <a href="https://drive.google.com/file/d/1awJGX6WS-gTh2Rg2n3sO75v2MDUIeEis/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer">
                <button className='topContent_downloadButton'>Download CV</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
            <button className='topContent_workButton'>My Work</button>
            </Link>
        </div>
      
    </div>
  )
}

export default TopContent
