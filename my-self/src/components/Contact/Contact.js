import React from 'react'
import { Element } from 'react-scroll'
import "./Contact.css";

const Contact = () => {
  return (
    <Element className='contact' id="contact">
        <h1>Contact</h1>
        <div className='contact_container'>
          <p>
            Email : <span>keethanamurali28@gmil.com</span>
          </p>
          <p>LinkedIn : <span>@www.linkedin.com/in/keerthana-murali-441a9a24a</span></p>
          <p>Github Username : <span>@keerthana0528</span></p>
          <p>Contact Number: <span>7010700442</span></p>
          <div className='contact_icons'> 
            
          </div>
        </div>
    </Element>
  )
}

export default Contact
