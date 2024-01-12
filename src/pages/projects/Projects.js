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
			project: "https://github.com/salatech/ip-address-tracker",
			live: "https://salatech.github.io/ip-address-tracker/",
			alt: "Ip Tracker image",
			description:
				"This app takes the IP address as input in the search bar and process it's location on the map.",
			image: "https://salatech.github.io/portfolio/images/map.png",
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
		{
			id: "2",
			name: "React Quiz App",
			project: "https://github.com/salatech/r-quiz",
			alt: "Quiz app image",
			live: "https://salatech-react-quiz.netlify.app/",
			description:
				"This app process a multi-choice questions from different field and it shows the result after each attempts.",
			image: "https://salatech.github.io/portfolio/images/quiz.png",
		},

		{
			id: "6",
			name: "Language Translator",
			project: "https://github.com/salatech/language-translator",
			live: "https://salatech.github.io/language-translator/",
			alt: "language trans app image",
			description:
				"This app can translate over 50 different languages and you can also listen to languages intonations",
			image:
				"https://github.com/salatech/ip-address-tracker/blob/main/assets/images/lang.png?raw=true",
		},

		{
			id: "5",
			name: "Note App",
			project: "https://github.com/salatech/Note-App",
			live: "https://salatech.github.io/Note-App/",
			alt: "Note app image",
			description:
				"This app can be used to keep important notes and stores them on the local server. ",
			image: "https://salatech.github.io/portfolio/images/note.png",
		},
		{
			id: "4",
			name: "Movie App",
			project: "https://github.com/salatech/movie",
			live: "https://salatech.github.io/movie/",
			alt: "Movie app image",
			description:
				"This app is a  movie search engine. It comprises of all the movies you can think of.",
			image: "https://salatech.github.io/portfolio/images/movie.png",
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
