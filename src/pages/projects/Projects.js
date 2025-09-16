import React from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./Projects.css";

const Projects = ({ theme }) => {
	const data = [
		{
			id: "0",
			name: "Nem Health",
			project: "",
			live: "https://nem-health.com",
			alt: "Nem Health websiteimage",
			description: "Website for Nigeria's Trusted HMO for Affordable & Quality Care.\nProviding individuals and families with accessible healthcare solutions.",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1758004922/tb2js3echpfrymvglisc.png",
		},
		{
			id: "1",
			name: "Physician Copilot",
			project: "",
			live: "https://physicianscopilot.com",
			alt: "Physician Copilot image",
			description: "An AI tool designed to assist physicians in their daily workflow.\nStreamlines tasks and enhances clinical decision-making.",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1758006195/bccjxvs3c68fiqfvaf33.png",
		},

		{
			id: "4",
			name: "Style Hub",
			project: "https://github.com/salatech/Style-Hub",
			live: "https://style-hubs.vercel.app/",
			alt: "Note app image",
			description:
				"This is a frontend based e-commerce platform. It comprises of all the features of a typical e-commerce platform.",
			image: "https://github.com/salatech/Style-Hub/raw/main/public/homepage.png",
		},

		{
			id: "5",
			name: "Qr Code Generator",
			project: "https://github.com/salatech/QR-CODE-GENERATOR",
			alt: "Qr code generator image",
			live: "https://salatech-qr-code-generator.vercel.app/",
			description:
				"This app generates a QR code from a text input or Images, or link and displays. It allows users to download and share the QR code",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1758009560/g077odiunfeskrbuzljn.png",
		},
		{
			id: "3",
			name: "Language Translator",
			project: "https://github.com/salatech/language-translator",
			live: "https://language-translator-ts.vercel.app/",
			alt: "language trans app image",
			description:
				"This app provides real-time translation across multiple languages, pronunciation, text-to-speech functionality and lots more",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1758008635/tcmzmd25wvnw7xqmrxfo.png",
		},
		{
			id: "2",
			name: "IP Address Tracker",
			project: "https://github.com/salatech/ip-tracker",
			live: "https://ip-tracker-ts.vercel.app/",
			alt: "Ip Tracker image",
			description:
				"This app takes the IP address as input in the search bar and process it's location on the map.",
			image: "https://salatech.github.io/portfolio/images/map.png",
		},
	
	];
	return (
		<Fade>
			<div
				className="projects-main"
				id="projects"
			>
				<p className="projects-button">my projects</p>
				<h2>
					Some of the Projects I've{" "}
					<span style={{ color: "rgb(16, 110, 234)" }}>worked</span> and
					and Collaborated on.
				</h2>
				<div className="repo-cards-div-main">
					{data.map((repo) => {
						return (
							<GithubRepoCard
								repo={repo}
								theme={theme}
							/>
						);
					})}
				</div>
				<Button
					text={"More Projects"}
					className="project-button"
					href={"https://github.com/salatech"}
					theme={theme}
				/>
			</div>
		</Fade>
	);
};

export default Projects;
