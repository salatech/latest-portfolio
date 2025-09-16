import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

const DegreeCard = (props) => {
	const degree = props.degree;
	const theme = props.theme;
	return (
		<div className="degree-card">
			<Fade
				right
				duration={2000}
				distance="40px"
			>
				<div
					className="card-body"
					style={{ width: "100%" }}
				>
					<div
						className="body-header"
						style={{ backgroundColor: "#001c55", color: "#ecf9fe" }}
					>
						<p className="card-title">{degree.date}</p>
						<p className="card-title">{degree.degree}</p>
					</div>
					<div className="body-header-title">
						<p
							className="card-subtitle"
							style={{ color: theme.text }}
						>
							{degree.subtitle}
						</p>
						<h4
							className="card-title"
							style={{ color: theme.text }}
						>
							{degree.title}
						</h4>
						<div
							className="card-subtitle"
							style={{ color: theme.text }}
						>
							{degree.description?.map((description, index) => (
								<span key={index}>
									{`- ${description}`} <br />{" "}
								</span>
							))}
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default DegreeCard;
