import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-header-div">
          <Fade bottom duration={2000} distance="20px">
          <p className="deg-button">Degrees</p>
            <h1 className="educations-header" style={{ color: theme.text }}>
              My <span style={{color:"rgb(16, 110, 234)"}} >degrees</span> 
            </h1>
          </Fade>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree) => {
            return <DegreeCard degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Educations;
