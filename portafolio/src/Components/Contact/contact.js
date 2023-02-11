import React from 'react'
import "../Contact/contactStyles.css"
import linkedin from "../../assets/linkedin.png"
import gitHub from "../../assets/gitHub.png"

export default function Contact() {
  return (
    <div className="contactContainer">
          <h1 name="contact" className="contact-h1">Contact</h1>
          <form className='form' action='mailto:desantiscarlos95@gmail.com' method="post" enctype="text/plain">
            <input className='email' type="email" placeholder='Escribe tu email'></input>
            <input className='mensaje' type="text" placeholder='Escribe tu mensaje'></input>
            <button type='submit' className='enviar' >Enviar</button>
          </form>
          <div className='redes'>
          <a href='www.linkedin.com/in/carlos-francisco-de-santis-5760a71b5'><img className="linkedin" src={linkedin} /></a>
          <a href='https://github.com/Charly77955'><img className="gitHub" src={gitHub} /></a>
          </div>
        </div>
  )
}
