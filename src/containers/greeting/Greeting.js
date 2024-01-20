import React from "react";
import "./Greeting.css";

import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Me from "../../assests/images/mee.png";

export default function Greeting(props) {
	const theme = props.theme;
	return (
		<Fade
			bottom
			duration={2000}
			distance="40px"
		>
			<div
				className="greet-main"
				id="about"
			>
				<div className="greeting-main">
					<div className="greeting-text-div">
						<h1
							className="greeting-text"
							style={{ color: theme.text }}
						>
							{greeting.title}
						</h1>
						<h2
							className="greeting-nickname"
							style={{ color: theme.text }}
						>
							{greeting.nickname}
						</h2>
						<p
							className="greeting-text-p subTitle"
							style={{ color: theme.text }}
						>
							{greeting.subTitle}
						</p>

						<div className="portfolio-repo-btn-div">
							<Button
								text="My Resume"
								newTab={true}
								href="https://drive.google.com/file/d/1GBJQMr4JUy9p1Md-cr5ErA-UcLOaFdOJ/view?usp=sharing"
								theme={theme}
								className="portfolio-repo-btn"
							/>
						</div>
					</div>
					<div className="greeting-image-div">
						<img
							alt="My picture"
							src={Me}
						/>
					</div>
				</div>
			</div>
		</Fade>
	);
}
