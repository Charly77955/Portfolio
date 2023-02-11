import React from "react";
import "../Skills/SkillsStyles.css";
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import js from "../../assets/js.png"
import reactJs from "../../assets/reactJs.png"
import reactNative from "../../assets/reactNative.png"
import npm from "../../assets/npm.png"
import git from "../../assets/git.png"
import svelte from "../../assets/svelte.png"

export default function SkillSet() {
  return (
    <div>
      <h1 name="skills" className="skills-h1">Skills</h1>
      <div class="skills-container">
  <div className="skill-items">
  <div class="item"><img className="html" src={html} /></div>
  <div class="item"><img className="css" src={css} /></div>
  <div class="item"><img className="js" src={js} /></div>
  <div class="item"><img className="reactJs" src={reactJs} /></div>
  <div class="item"><img className="reactNative" src={reactNative} /></div>
  <div class="item"><img className="npm" src={npm} /></div>
  <div class="item"><img className="git" src={git} /></div>
  <div class="item"><img className="svelte" src={svelte} /></div>
    </div>
    </div>
  </div>
  );
}
