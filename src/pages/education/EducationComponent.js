import React, { Component } from "react";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
       
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
            </div>
          </Fade>
          {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
          
          <Educations theme={this.props.theme} />
        </div>
      </div>
    );
  }
}

export default Education;
