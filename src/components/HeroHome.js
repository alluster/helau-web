import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
import ClipLoader from "react-spinners/ClipLoader";
import Overlay from './Overlay';

const HeroStyled = styled.div`
	min-height: 100%;
	height: 100%;
	z-index: -1;
	background-position: center;
	background-color: ${props => props.theme.colors.blue};
	@media ${device.laptop} {
		height: 100%;
    }

`;

const HeroContent = styled.div `
	padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 999;
	max-width: 70%;
	justify-content: center;

	height: 100%;
	@media ${device.laptop} {
		max-width: 100%;
		padding-top: 20px;
		padding-bottom: 20px;

    }
`;


const TextContainer = styled.div `
	display: flex;
	justify-content: center;
	text-align: left;
	flex-direction: column;
	justify-content: center;
	line-break: normal;
	align-items: center;

	@media ${device.laptop} {
		flex: 1;
		justify-content: center;

	}	
	`;



const Title = styled.h1`
	
	color: ${props => props.theme.colors.yellow};

    font-size:  ${props => props.theme.fontSize.h1}
    @media ${device.laptop} {
	
		hyphens: auto;


	}	
`;

const Ingress = styled.p `
	font-size: 22px;
    color: white;
    font-weight: 300 !important;
	letter-spacing: 0.6px;
	margin-top: 25px;
	margin-bottom: 30px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;


     }
`;





const HeroHome = ({title, ingress, image, children }) => {
    return(
        <HeroStyled >
				<Container>

					<HeroContent>
						
						<TextContainer>
							<Title>
							<h5>Ajatella - tehdä - tarkkailla</h5>

							Luomme moderneja digitaalisia kokemuksia avoimemman maailman puolesta.
							
							</Title>
				
							<Ingress>
								{ingress}
							</Ingress>
							{children}
						</TextContainer>
			
					</HeroContent>
					</Container>

				
				{/* <Overlay themeColor="Brand" /> */}
        </HeroStyled>
		
        
    );
};



export default HeroHome;