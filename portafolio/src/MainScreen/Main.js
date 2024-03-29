import React from "react";
import "../MainScreen/MainStyle.css";
import fotocv from "../assets/fotocv.png";

function Main() {
  return (
    <>
      <div name="home" className="img-code">
        <img
          className="gif"
          src="https://thumbs.gfycat.com/DefiniteThirstyKestrel-size_restricted.gif"
          alt=""
        />
      </div>
      <div className="img-noteContainer">
        <img className="img-note" src={fotocv} />
        <h1 className="tittle">
          i'm Carlos De Santis
          <br />
          Front-End Developer
        </h1>
      </div>
      <div className="barra1">
        <div className="horizontal1"></div>
      </div>
    </>
  );
}
export default Main;
