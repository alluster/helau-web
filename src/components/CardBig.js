
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage } from "gatsby";
import { device } from '../device';

const CardContainer = styled.div`
	flex: 2;
	background-color: ${props => props.theme.colors.red};
`;

const CardImageContainer = styled.div`
	object-fit: cover;
	height: 200px;
`;

const CardContent = styled.div`

`;

const CardTextContainer = styled.div`
	padding: 20px;

`;

const LeadingText = styled.h5`
	color: ${props => props.theme.colors.yellow};

`;

const Title = styled.h2`
	color: ${props => props.theme.colors.yellow};

`;

const CardBig = (props) => {
	return (
		<CardContainer>
			{console.log(props)
}
			<CardImageContainer>
				<img 
					src={props.image} 
				/>
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