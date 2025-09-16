import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";

export default function Footer(props) {
	return (
		<div className="footer-div">
			<Fade>
				<div
					className="footer-text"
					style={{ color: props.theme.black }}
				>
					<span>All rights reserved.</span>
					<span style={{ fontSize: "24px" , marginTop:"5px" }}>&copy; </span>
					<span>{new Date().getFullYear()}</span>
				</div>
			</Fade>
		</div>
	);
}
