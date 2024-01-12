import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
	const theme = props.theme;
	return (
		<div
			className="main"
			id="skills"
		>
			<div className="skills-header-div">
				<p className="skill-button">my skills</p>
				<Fade
					bottom
					duration={2000}
					distance="20px"
				>
					<h2 className="skills-header">
						Some of my{" "}
						<span style={{ color: "rgb(16, 110, 234)" }}>skills</span> and
						technologies
					</h2>
				</Fade>
			</div>
			<SkillSection theme={theme} />
		</div>
	);
}
