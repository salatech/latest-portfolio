import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

const SkillSection = (props) => {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill) => {
        return (
          <div className="skills-main-div">
            <div className="skills-text-div">
              <Fade right duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillSection;
