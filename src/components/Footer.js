import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { device } from '../device';
// import Markdown from '../Markdown';
import { Row, Col } from 'react-flexbox-grid';
import ContactForm from './ContactForm';

const Footer = () => {

	const Container = styled.div`
		background-color: ${props => props.theme.colors.blue};
		height: 100%;
		margin-top: 150px;
		@media ${device.laptop} {
			margin-top: 0px;
	
		}
	
`;

	const Content = styled.div`
		max-width: 1200px;
		margin-left:auto;
		margin-right: auto;
		display: flex;
		flex-direction: row;
		padding-top: 64px;
		padding-bottom: 64px;
		color: ${props => props.theme.colors.yellow};
		@media ${device.laptop} {
			flex-direction: column;
			text-align: center;
			justify-content: center;
			align-items: center;
	
		}
`;

	const Column1 = styled.div`
		flex: 1;
		margin: 40px;	
		@media ${device.laptop} {
			flex: 1;
			margin: 24px;	
		}
	`;
	const Column2 = styled.div`
		flex: 3;
		margin: 40px;	
		@media ${device.laptop} {
			flex: 1;
			margin: 24px;	
	
	
		}
	`;



	useEffect(() => {
		// context.GetFooterContent("4g3oxVSEZ0pvZelnhxZVHL",`${context.lang}`)
		// eslint-disable-next-line
	}, [])

	return (
		<Container>
			<ContactForm />
			<Content>
				<Column1>
					<h5>Osoitetiedot</h5>
					<p>Helau Solutions Oy </p>
					<p>Ristolantie 4  1krs</p>
					<p>FIN-00320 Helsinki</p>
					<h5>Ota yhteyttä</h5>
					<p>Aleksanteri Heliövaara</p>
					<p>aleksanteri@helau.io</p>
					<p>+358442360304</p>
				</Column1>
				<div></div>
				<Column2 >
					<h3 style={{ marginTop: "0px" }}>Helau Solutions</h3>
					<h4>Digitaalisen suunnittelun kapinalliset. Haluamme rakentaa merkityksellistä muutosta teknologian ja designin avulla - siksi kutsummekin kaikki rohkeat sekä uteliaat yritykset asiakkaiksemme. Luomme moderneja digitaalisia kokemuksia avoimemman maailman puolesta.</h4>
					<h5>2021 © Helau Solutions Oy</h5>

				</Column2>
			</Content>
		</Container>
	);
};


export default Footer;