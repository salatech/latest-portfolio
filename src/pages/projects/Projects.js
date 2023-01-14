import React, { Component } from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./Projects.css";

class Projects extends Component {
  
  render() {
      var data = [
    {
      "id": "1",
      "name": "IP Address Tracker",
      "project": "https://github.com/salatech/ip-address-tracker",
      "live" : "https://salatech.github.io/ip-address-tracker/",
      "alt" : "Ip Tracker image",
      "description": "This app takes the IP address as input in the search bar and process it's location on the map.",
      "image": "https://salatech.github.io/portfolio/images/map.png",
      
    },
    {
      "id": "2",
      "name": "React Quiz App",
      "project": "https://github.com/salatech/r-quiz",
      "alt" : "Quiz app image",
      "live" : "https://salatech-react-quiz.netlify.app/",
      "description": "This app process a multi-choice questions from different field and it shows the result after each attempts.",
      "image": "https://salatech.github.io/portfolio/images/quiz.png",
      
    },
   
    {
      "id": "6",
      "name": "Language Translator",
      "project": "https://github.com/salatech/language-translator",
      "live" : "https://salatech.github.io/language-translator/",
      "alt" : "language trans app image",
      "description": "This app can translate over 50 different languages and you can also listen to languages intonations",
      "image": "https://github.com/salatech/ip-address-tracker/blob/main/assets/images/lang.png?raw=true",
      
    },
    {
      "id": "3",
      "name": "React Calculator",
      "project": "https://github.com/salatech/react-calculator",
      "live" : "https://salatech-react-calculator-app.netlify.app",
      "alt" : "Calculator app image",
      "description": "This calculator has the ability to perform arithmetic operations and stores the results.",
      "image": "https://salatech.github.io/portfolio/images/calculator.png",
      
    },
    {
      "id": "5",
      "name": "Note App",
      "project": "https://github.com/salatech/Note-App",
      "live" : "https://salatech.github.io/Note-App/",
      "alt" : "Note app image",
      "description": "This app can be used to keep important notes and stores them on the local server. ",
      "image": "https://salatech.github.io/portfolio/images/note.png",
    },
    {
      "id": "4",
      "name": "Movie App",
      "project": "https://github.com/salatech/movie",
      "live" : "https://salatech.github.io/movie/",
      "alt" : "Movie app image",
      "description": "This app is a  movie search engine. It comprises of all the movies you can think of.",
      "image": "https://salatech.github.io/portfolio/images/movie.png",
      
    }
  ];
    const theme = this.props.theme;
    return (
      <Fade >
      <div className="projects-main" id="projects">
      <p className="projects-button">my projects</p>
        <h2>Some of my <span style={{color:"rgb(16, 110, 234)"}}>projects</span> </h2>
        <div className="repo-cards-div-main">
          {data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme}/>;
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
  }
}

export default Projects;
