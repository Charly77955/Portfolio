import React from "react";
import "../Projects/projectsStyles.css";
import clip1 from "../../assets/videos/clip1.mp4";
import clip2 from "../../assets/videos/clip2.mp4";
import clip3 from "../../assets/videos/clip3.mp4";
import clip4 from "../../assets/videos/clip4.mp4";
import reactNative from "../../assets/reactNative.png";
import css from "../../assets/css.png";
import reactJs from "../../assets/reactJs.png"
import sass from "../../assets/sass.png"
import gitHub from "../../assets/gitHub.png"

export default function Projects() {
  const clip = document.querySelectorAll(".clip");
  for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener("mouseenter", function (e) {
      clip[i].play();
    });
    clip[i].addEventListener("mouseout", function (e) {
      clip[i].pause();
    });
  }
  return (
    <div className="flex-container">
      <div className="portafolio-container">
        <div className="portafolio-boxes">
          <h1 name="projects" className="portafolio-h1">
            Projects
          </h1>
          <div className="projectDetails">
            <h5 className="detailTittleInmo">Inmobiliaria App</h5>
            <div className="detailsLogo">
              <img className="reactNativeProject" src={reactNative} />
              <img className="cssProject" src={css} />
            </div>
          </div>

          <div className="portafolio-item">
            <div className="videoBx">
              <video
                src={clip1}
                type="video.mp4"
                loop
                muted
                className="clip"
                width="300px"
                height="380px"
              />
            </div>
            <a href='https://github.com/Charly77955/InmobiliariaApp'><img className="gitHub" src={gitHub} alt=''/></a>
          </div>
          <div className="projectDetails">
            <h5 className="detailTittleMenu">Menu App</h5>
            <div className="detailsLogo">
              <img className="reactNativeProject" src={reactNative} />
              <img className="cssProject" src={css} />
            </div>
          </div>
          <div className="portafolio-item">
            <video
              src={clip2}
              type="video.mp4"
              loop
              muted
              className="clip"
              width="300px"
              height="380px"
            />
            <a href='https://github.com/Charly77955/MenuApp'><img className="gitHub" src={gitHub} alt=''/></a>
          </div>
          <div className="projectDetails">
            <h5 className="detailTittleVuelos">Reservacion Vuelos App</h5>
            <div className="detailsLogoVuelos">
              <img className="reactNativeProject" src={reactNative} />
              <img className="sassProject" src={sass} />
            </div>
          </div>
          <div className="portafolio-item">
            <video
              src={clip3}
              type="video.mp4"
              loop
              muted
              className="clip"
              width="300px"
              height="380px"
            />
            <a href='https://github.com/Charly77955/AppReservacionVuelos'><img className="gitHub" src={gitHub} alt=''/></a>
          </div>
          <div className="projectDetails">
            <h5 className="detailTittleClima">Weather App</h5>
            <div className="detailsLogoClima">
              <img className="reactJsClima" src={reactJs} />
              <img className="cssProject" src={css} />
            </div>
          </div>
          <div className="portafolio-item">
            <video
              src={clip4}
              type="video.mp4"
              loop
              muted
              className="clip4"
              width="280px"
              height="360px"
            />
            <a href='https://github.com/Charly77955/WeatherPageProject'><img className="gitHub" src={gitHub} alt=''/></a>
          </div>
        </div>
      </div>
      <div className="barra1">
        <div className="horizontal1"></div>
      </div>
    </div>
  );
}
