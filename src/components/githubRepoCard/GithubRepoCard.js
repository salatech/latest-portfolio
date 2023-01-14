import React from "react";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} >
          <div className="repo-image">
          <img src={repo.image} alt={repo.alt} />
          </div>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              <a href={repo.live} className="Link">Live Demo</a> || <a href={repo.project} className="Link">Repository</a>
            </p>

          </div>
    
        </div>
      </Fade>
    </div>
  );
}
