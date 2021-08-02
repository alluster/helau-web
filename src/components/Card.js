
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage } from "gatsby";
import { device } from '../device';

const CardContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 48%;
	background-color: ${props => props.theme.colors.white};
	margin: 1%;
	@media ${device.laptop} {
		width: 100%;

	}
`;

const CardImageContainer = styled.img`
	height: 600px;
	background-color: green;
	object-fit: cover !important;
	@media ${device.laptop} {
		height: 200px;

	}

`;


const CardContent = styled.div`


`;

const CardTextContainer = styled.div`
	

`;

const LeadingText = styled.p`
	margin-top: 24px;
	color: ${props => props.theme.colors.black};

`;

const Title = styled.h3`
	margin-top: 24px;
	color: ${props => props.theme.colors.black};

`;

const Card = (props) => {
	return (
		<CardContainer  to={`/article/${props.slug}`}>
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


export default Card;