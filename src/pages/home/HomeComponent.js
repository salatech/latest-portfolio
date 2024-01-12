import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Projects from "../projects/Projects";
import Experience from "../experience/Experience";
import Education from "../education/EducationComponent";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";

const Home = (props) => {
	const theme = props.theme;
	return (
		<div>
			<Header theme={props.theme} />
			<Greeting theme={props.theme} />
			<SocialMedia theme={theme} />
			<Skills theme={props.theme} />
			<Projects theme={props.theme} />
			<Experience theme={props.theme} />
			<Education theme={props.theme} />
			<Footer theme={props.theme} />
			<TopButton theme={props.theme} />
		</div>
	);
};

export default Home;
