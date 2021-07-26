
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage } from "gatsby";
import { device } from '../device';

const CardContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	height: 100%;
	min-width: 300px;
	flex: 2;
	background-color: ${props => props.theme.colors.white};
	margin: 15px;
	
`;

const CardImageContainer = styled.img`
	height: 300px;
	background-color: green;
	object-fit: cover !important;
	

`;


const CardContent = styled.div`


`;

const CardTextContainer = styled.div`
	

`;

const LeadingText = styled.p`
	margin-top: 24px;
	color: ${props => props.theme.colors.black};

`;

const Title = styled.h5`
	margin-top: 24px;
	color: ${props => props.theme.colors.black};

`;

const CardSmall = (props) => {
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


export default CardSmall;