import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../device';


const AuthorCard = ({ image, name, email, description }) => {
	const CardContainer = styled.div`
		display: flex;
		flex-direction: row;
		font-family: 'Open Sans'
		margin-right: 10px;
		margin-top: 10px		
		@media ${device.laptop} {
			width: 100%;
		}
		
`;

	const CardContent = styled.div`
		align-self: center;
	`;

	const ImageContainer = styled.img`
		height: 100px;
		width: 100px;
		border-radius: 50%;
		background-repeat: no-repeat;
		object-fit: cover;
		align-self: center;
		margin-right: 32px;
	`;


	return (
		<CardContainer>
			{
				image ? <ImageContainer src={image} /> : null
			}

			<CardContent>
				<h5 style={{ marginBottom: "0px" }}>
					{name}
				</h5>
				<p style={{ marginTop: "8px", marginBottom: "0px" }}>
					{description}
				</p>
				<p  style={{ marginTop: "8px" }}>{email && email || ""}</p>


			</CardContent>

		</CardContainer>
	);
};


export default AuthorCard;