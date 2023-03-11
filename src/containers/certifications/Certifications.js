import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = ({ theme }) => {
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <p className="cemt-button">certifications</p>
          <h1 className="certs-header" style={{ color: theme.text }}>
            My <span style={{ color: "rgb(16, 110, 234)" }}>certifications</span>
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert) => {
          return <CertificationCard certificate={cert} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
