import React from "react";
import "./style.css";
import resume from "../../docs/resume.pdf"

function Nav({page, handleChange}) {
    return (
        <ul>
          <li><a href="#aboutMe" onClick={() => handleChange("AboutMe")}>About Me</a></li>
          <li><a href="#projects" onClick={ () => handleChange("Project")}>Projects</a></li>
          <li><a href="#contactMe" onClick= {() => handleChange("ContactMe")}>Contact</a></li>
          <li><a href={resume}download>Resume</a></li>
        </ul>
    )
};

export default Nav;