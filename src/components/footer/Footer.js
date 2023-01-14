import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {

  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.black }}>
        <span>All Rights Reserved</span>
        <span>Designed by SALATECH</span>
        
        </p>
      </Fade>
    </div>
  );
}
