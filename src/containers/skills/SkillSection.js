import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

const SkillSection = (props) => {
	const theme = props.theme;
	return (
		<div>
			{skills.data.map((item, index) => {
				return (
					<div className="skills-main-div">
						<div className="skills-text-div">
							<Fade
								right
								duration={2000}
							>
								{item.skills.map((skillItem, skillIndex) => {
									return (
										<div className="skill-box">
											<img
												className="skill-img"
												src={skillItem.image}
												alt={skillItem.title}
												height={"25px"}
											/>
											<p
												className="subTitle skills-text"
												style={{ color: theme.text }}
											>
												{skillItem.title}
											</p>
											<p
												className="subTitle skills-text2"
												style={{ color: theme.text }}
											>
												{skillItem.skill}
											</p>
										</div>
									);
								})}
							</Fade>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default SkillSection;
