import React, { Component } from "react";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main" id="experience">
        
      <p className="exp-button" style={{textAlign:"center"}}>my experience</p>
        <Fade bottom duration={2000} distance="40px">
          
          <h2 style={{textAlign:"center"}} className="exp-head">My work <span style={{color:"rgb(16, 110, 234)"}}>experience</span></h2>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        </Fade>
      </div>
    );
  }
}

export default Experience;
