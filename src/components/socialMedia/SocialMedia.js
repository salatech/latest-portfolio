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
