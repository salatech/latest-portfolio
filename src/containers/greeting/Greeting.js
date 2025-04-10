import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Me from "../../assests/images/mee.png";

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="about">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {greeting.title}
            </h1>
            <h2 className="greeting-nickname" style={{ color: theme.text }}>
              {greeting.nickname}
            </h2>
            <p
              className="greeting-text-p subTitle"
              style={{ color: theme.text }}
            >
              {greeting.subTitle}
            </p>

            <div className="portfolio-repo-btn-div">
             
			<SocialMedia theme={theme} />
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="Solahudeen Abdulrahmon" src={Me} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
