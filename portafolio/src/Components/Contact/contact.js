import React from 'react'
import "../Contact/contactStyles.css"
import linkedin from "../../assets/linkedin.png"
import gitHub from "../../assets/gitHub.png"

export default function Contact() {
  return (
    <div className="contactContainer">
          <h1 name="contact" className="contact-h1">Contact</h1>
          <form  className='form' action="https://formsubmit.co/a04ecfa5f0fa30d56a87fcd52f153bbc" method="POST">
            <input className='nombre' type="text" name="nombre" placeholder='Escribe tu nombre'></input>
            <input className='nombre' type="email" name="email" placeholder='Escribe tu mail'></input>
            <input className='mensaje' type="text" name="mensaje" placeholder='Escribe tu mensaje'></input>
            <button type='submit' className='enviar' >Enviar</button>
          </form>
          <div className='redes'>
          <a href='https://linkedin.com/in/carlos-de-santis87'><img className="linkedin" src={linkedin} alt='' /></a>
          <a href='https://github.com/Charly77955'><img className="gitHubContact" src={gitHub} alt=''/></a>
          </div>
        </div>
  )
}
