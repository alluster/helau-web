import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
import Typewriter from 'typewriter-effect';

const HeroStyled = styled.div`
	min-height: 100%;
	z-index: -1;
	background-position: center;
	background-color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		height: 100%;
    }

`;

const HeroContent = styled.div `
	padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	flex-direction: row;
	position: relative;
	z-index: 999;
	justify-content: center;
	height: 100%;
	@media ${device.laptop} {
		max-width: 100%;
		padding-top: 20px;
		padding-bottom: 0px;
		flex-direction: column-reverse;
    }
`;


const TextContainer = styled.div `
	display: flex;
	margin: 1%;
	flex: 2;
	justify-content: center;
	text-align: left;
	flex-direction: column;
	line-break: normal;
	width: 48%;

	@media ${device.laptop} {
		flex: 1;
		justify-content: center;
		margin-top: 0px;
		width: 100%;
	}	
	`;



const Title = styled.h1`
	color: ${props => props.theme.colors.black};
	hyphens: auto;
    @media ${device.laptop} {
		font-size: 40px;
		margin-top: 40px;
		hyphens: auto;


	}	
`;
const ImageContainer = styled.div`
	margin: 1%;
	width: 48%;
	flex: 2;
	height: 1000px;
	@media ${device.laptop} {
		height: 300px;
		flex: 1;
		width: 100%;


	}	
`;

const Image = styled.img`
	height: 100%;
	object-fit: cover;
`;

const Ingress = styled.p `
    color: black;
    font-weight: 300 !important;
	letter-spacing: 0.6px;
	margin-top: 25px;
	margin-bottom: 30px;
    @media ${device.laptop} {
        font-size: 18px;
		margin-top: 10px;


     }
`;





const HeroHome = () => {
	return(
		<HeroStyled >
			<Container>

				<HeroContent>
						
					<TextContainer>
						<Title>
							<Typewriter
								options={{
									strings: ['React.js', 'UX Design', 'Contentful', 'Wordpress', 'SQL', 'React Native', 'UI Design', 'Service Design', 'Python', 'Gatsby.js' ],
									autoStart: true,
									loop: true,
								}}
							/>
						</Title>
						<Ingress>
							<h2 style={{ marginBottom: '40px'}}>Kokemuksia avoimemman maailman puolesta.</h2>

							<h5 style={{ fontWeight: 400 }}>Helau Solutions Oy on Helsinkiläinen projektiluontoiseen digikehitykseen keskittynyt palvelutoimisto. Suunnittelemme ja toteutamme digitaaliset palvelut monimutkaisiin tarpeisiin.</h5>
						</Ingress>
					</TextContainer>
					<ImageContainer>
						<Image src="/oodi.jpeg"/>
					</ImageContainer>
				</HeroContent>
			</Container>

				
			{/* <Overlay themeColor="Brand" /> */}
		</HeroStyled>
		
        
	);
};



export default HeroHome;