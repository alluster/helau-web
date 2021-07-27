
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage } from "gatsby";
import { device } from '../device';

const CardContainer = styled(Link)`
		flex: 0 1 32.5%;
		display: flex;
		flex-direction: column;
		background-color: ${props => props.theme.colors.red};
		margin: 15px;
		@media ${device.laptopL} {
			flex: 0 1 100%;
		}
	`;

const CardImageContainer = styled.img`
	background-color: green;
	object-fit: cover;
	flex: 2;
	@media ${device.laptop} {
		height: 100px;
	}

`;


const CardContent = styled.div`
	flex: 1;
	height: 100%;

`;

const CardTextContainer = styled.div`
	padding: 20px;
	

`;

const LeadingText = styled.h5`
	color: ${props => props.theme.colors.white};

`;

const Title = styled.h3`
	color: ${props => props.theme.colors.white};

`;

const CardBig = (props) => {
	return (
		
		<CardContainer  to={`/article/${props.id}`}>
				

			<CardImageContainer src={props.image} >
			
			</CardImageContainer>
			<CardContent>
				<CardTextContainer>
					<LeadingText>
						{props.leadingText}
					</LeadingText>
					<Title>
						{props.title}
					</Title>
				</CardTextContainer>
			</CardContent>

		</CardContainer>

	);
};


export default CardBig;