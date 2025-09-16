import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
	return (
		<div
			key={repo.id}
			className="repo-card-div"
			style={{}}
		>
			<Fade
				bottom
				duration={2000}
				distance="40px"
			>
				<div className="repo-image">
					<img
						src={repo.image}
						alt={repo.alt}
					/>
				</div>
				<div className="repo-name-div">
					<p
						className="repo-name"
						style={{ color: theme.text }}
					>
						{repo.name}
					</p>
				</div>
				<p
					className="repo-description"
					style={{ color: theme.text }}
				>
					{repo.description}
				</p>
				<p
					className="repo-creation-date subTitle"
					style={{ color: theme.secondaryText }}
				></p>
				<div className="repo-details">
					<a
						href={repo.live}
						className="Link"
					>
						<button> Live Demo</button>
					</a>
					{repo.project.length > 0 && (
					<a
						href={repo.project}
						className="Link"
					>
							<button> Github Link</button>
						</a>
					)}
				</div>
			</Fade>
		</div>
	);
}
