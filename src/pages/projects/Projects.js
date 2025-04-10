import React from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./Projects.css";

const Projects = ({ theme }) => {
	const data = [
		{
			id: "1",
			name: "IP Address Tracker",
			project: "https://github.com/salatech/ip-tracker",
			live: "https://ip-tracker-ts.vercel.app/",
			alt: "Ip Tracker image",
			description:
				"This app takes the IP address as input in the search bar and process it's location on the map.",
			image: "https://salatech.github.io/portfolio/images/map.png",
		},
		{
			id: "6",
			name: "Language Translator",
			project: "https://github.com/salatech/language-translator",
			live: "https://language-translator-ts.vercel.app/",
			alt: "language trans app image",
			description:
				"This app provides real-time translation across multiple languages, pronunciation, text-to-speech functionality and lots more",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1744301297/my%20portfolio/language%20translator.png",
		},

		{
			id: "5",
			name: "Style Hub",
			project: "https://github.com/salatech/Style-Hub",
			live: "https://style-hubs.vercel.app/",
			alt: "Note app image",
			description:
				"This is a frontend based e-commerce platform. It comprises of all the features of a typical e-commerce platform.",
			image: "https://github.com/salatech/Style-Hub/raw/main/public/homepage.png",
		},
		{
			id: "2",
			name: "Qr Code Generator",
			project: "https://github.com/salatech/QR-CODE-GENERATOR",
			alt: "Qr code generator image",
			live: "https://salatech-qr-code-generator.vercel.app/",
			description:
				"This app generates a QR code from a text input or Images, or link and displays. It allows users to download and share the QR code",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1744304188/my%20portfolio/qr.png",
		},
		{
			id: "4",
			name: "Art Gallery",
			project: "https://github.com/salatech/pictures-library",
			live: "https://pictures-library.vercel.app/",
			alt: "Art gallery image",
			description:
				"This app is a picture library. It comprises of all the pictures you can think of.",
			image: "https://res.cloudinary.com/dvd8hlffl/image/upload/v1744320233/my%20portfolio/art%20gallery.png",
		},
		{
			id: "3",
			name: "Git hub users",
			project: "https://github.com/salatech/github_users",
			live: "https://github-users-salatech.vercel.app",
			alt: "github page image",
			description:
				"This app shows the data of all github users in a cool visualized dashboard.",
			image:
				"https://res.cloudinary.com/dvd8hlffl/image/upload/v1678277315/My%20web%20images/github_h9pg5y.png",
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
					Some of my{" "}
					<span style={{ color: "rgb(16, 110, 234)" }}>projects</span> and
					technologies
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
