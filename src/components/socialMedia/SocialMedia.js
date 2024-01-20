import React, { useEffect } from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
	i {
		background-color: ${(props) => props.backgroundColor};
	}
	&:hover i {
		background-color: ${({ theme }) => theme.text};
		transition: 0.3s ease-in;
	}
`;

const DraggableSocialMedia = () => {
	useEffect(() => {
		const socialMediaDiv = document.querySelector(".social-media-div");
		let offsetX, offsetY;

		const handleDragStart = (e) => {
			offsetX = e.clientX - socialMediaDiv.getBoundingClientRect().left;
			offsetY = e.clientY - socialMediaDiv.getBoundingClientRect().top;
			socialMediaDiv.style.position = "absolute";
			socialMediaDiv.style.pointerEvents = "none";

			document.addEventListener("mousemove", handleDragMove);
			document.addEventListener("mouseup", handleDragEnd);
		};

		const handleDragMove = (e) => {
			const x = e.clientX - offsetX;
			const y = e.clientY - offsetY;
			socialMediaDiv.style.left = `${x}px`;
			socialMediaDiv.style.top = `${y}px`;
		};

		const handleDragEnd = () => {
			document.removeEventListener("mousemove", handleDragMove);
			document.removeEventListener("mouseup", handleDragEnd);
			socialMediaDiv.style.pointerEvents = "auto";
		};

		socialMediaDiv.addEventListener("mousedown", handleDragStart);

		return () => {
			socialMediaDiv.removeEventListener("mousedown", handleDragStart);
		};
	}, []);

	return (
		<div
			className="social-media-div"
			title="Drag me!"
		>
			{socialMediaLinks.map((media) => {
				return (
					<a
						key={media.id} // Don't forget to add a unique key
						href={media.link}
						className={`icon-button`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconWrapper {...media}>
							<i className={`fab ${media.fontAwesomeIcon}`}></i>
						</IconWrapper>
					</a>
				);
			})}
		</div>
	);
};

export default DraggableSocialMedia;
