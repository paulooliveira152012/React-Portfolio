import React from "react";
import "./style.css"

function Project () {
    return (
        <div class="portfolio" id="portfolio">
          <h2>My Portfolio</h2>
          <ul>
            <li className="runbuddy"> <a
              href="https://paulooliveira152012.github.io/runBuddy2/"
              target="_blank"
              class="project"
              id="runBuddy"
              >
              <div class="title">Run Buddy</div>
            </a>
            </li>
            <li className="horiseon">  <a
              href="https://paulooliveira152012.github.io/horiseon-2-/"
              target="_blank"
              class="project"
              id="horiseon"
            >
              <div class="title">Horiseon</div>
            </a>
            </li>
          
            <li className="NEE"> <a href="https://radiant-sierra-52768.herokuapp.com/" target="_blank" class="project" id="nee">
              <div class="title">North Eastern Events</div>
            </a>
            </li>

            <li className="listenup"> <a href="https://young-shelf-44589.herokuapp.com/" target="_blank" class="project" id="listenup">
              <div class="title">ListenUp</div>
            </a>
            </li>
          
          </ul>
        </div>
    )
};

export default Project;