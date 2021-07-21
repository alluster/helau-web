import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
// import Markdown from '../Markdown';
import { Row, Col } from 'react-flexbox-grid';

const Footer = () => {

	const FooterContent = styled.div`
    width: 100%;
	margin-top: auto;
	padding-top: 30px;
	padding-bottom: 20px;
	background-color: ${props => props.theme.colors.blue};
    @media ${device.laptop} {
		bottom: 0;
		align-items: center;

    }
`;




	const Content = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	color: ${props => props.theme.colors.yellow};
	@media ${device.laptop} {
		text-align: center;


    }

`;

	const SocialButtons = styled.div`
	margin-top: 30px;
`;



	useEffect(() => {
		// context.GetFooterContent("4g3oxVSEZ0pvZelnhxZVHL",`${context.lang}`)
		// eslint-disable-next-line
	}, [])

	return (
		<FooterContent>
			<Container>
				<Content>
					<Row>
						<Col md={3} style={{'marginTop': '20px'}}>
							<h5>Osoitetiedot</h5>
							<p>Helau Solutions Oy </p>
							<p>Ristolantie 4  1krs</p>
							<p>FIN-00320 Helsinki</p>
							<h5>Ota yhteyttä</h5>
							<p>Aleksanteri Heliövaara</p>
							<p>aleksanteri@helau.io</p>
							<p>+358442360304</p>

						</Col>
						<Col md={5} >
							<h3>Helau Solutions</h3>
							<h4>Digitaalisen suunnittelun kapinalliset. Haluamme rakentaa merkityksellistä muutosta teknologian ja designin avulla - siksi kutsummekin kaikki rohkeat sekä uteliaat yritykset asiakkaiksemme. Luomme moderneja digitaalisia kokemuksia avoimemman maailman puolesta.</h4>

						</Col>
						<Col md={4}  >
							
						</Col>
					</Row>
					<Row bottom="xs" end="md" style={{ 'height': '100%' }}>
								<Col xs={12}>
								<h5>2021 © Helau Solutions Oy – All rights reserved</h5>
								</Col>
							</Row>
					{/* <Markdown source={context.footerContent.body} /> */}
					<SocialButtons>
						{/* <Social /> */}
					</SocialButtons>
				</Content>
			</Container>
		</FooterContent>
	);
};


export default Footer;