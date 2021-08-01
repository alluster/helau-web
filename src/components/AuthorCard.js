import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../device';


const AuthorCard = ({ image, name, email, description }) => {
	const CardContainer = styled.div `
		width: 280px;
		font-family: 'Open Sans'
		height: 300px;
		margin-right: 10px;
		margin-top: 10px
		border-radius: 5px;
		
		@media ${device.laptop} {
			width: 100%;
		}
		
`;

	const CardContent = styled.div`
		display: flex;
		flex-direction: column;
		min-height: 100px;
		border-radius: 0px 0px 5px 5px;
		padding: 15px 15px 15px 0px;
			
	`;
	const ImageContainer = styled.div`
		
		background-repeat: no-repeat;
		background-size: cover;

	`;

	const Image = styled.img`
		height: 200px;
		width: 200px
		border-radius: 100px;
		object-fit: cover;
		object-position: 50% 0%


	`;

    return(
			<CardContainer>
				<ImageContainer>
					<Image src={image} />
				</ImageContainer>
				<CardContent>
					<h2 style={{ 
							fontSize: "24px", 
							fontWeight: "600"}}>
						{name}
					</h2>
				
					<h2 
					style={{ 
							fontSize: "14px", 
							marginTop: "10px",
							fontWeight: "600"}}
							
					>
						{email}
					</h2>
					<p>{description}</p>
					
				</CardContent>

			</CardContainer>
    );
};


export default AuthorCard;