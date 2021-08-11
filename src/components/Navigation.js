import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Row, Col } from 'react-flexbox-grid';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../device';
import CustomLink from './CustomLink';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

const logo = '../images/logo-dark.png'

const NavContainer = styled.div`
	position: relative;
	min-width: 100%;
	z-index: 1000;
	height: 160px;
	top: 0;
	background-color: white;
	@media ${device.laptop} {
		height: 80px;
	}
	
`;


const Icon = styled(FontAwesomeIcon)`
	font-size: 22px;

	text-align: right;
	margin-right: 10px;
	color: ${props => props.theme.colors.white};
    :hover {
		cursor: pointer;
	}
	
	
`;


const ImageContainer = styled.div`
	height: 160px;
	display: flex;
	width: 100%;
	text-align: left;
	align-items: center;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		height: 80px;
	}
	
`;

const Image = styled.img`
	max-width: 184px;
	max-height: 35px;
	width: auto;
	height: auto;
	@media ${device.laptop} {
		height: 20px;
	}
`;

const OpenNav = styled.div`
	top: 80px;
	min-height: 100vh;
	background: white;
	text-align: center;
	padding-top: 50px;
	z-index: 1002;
	width: 100vw;
	@media ${device.laptop} {
		position: fixed;
		height: calc(100vh + 200px);
		text-align: left;
 	}

`;

const LinkTextMobile = styled.h2`
	margin-top: 20px;
	margin-bottom: 10px;
	color: black !important;


`;


const BurgerContainer = styled.div`
	display: flex;
	flex-direction: row;
	text-align: right;
	width: 100%;
	height: 160px;
	justify-content: flex-end;
	@media ${device.laptop} {
		height: 80px;
	}
	

`;
const BurgerContent = styled.div`
	height: 160px;
	padding-left: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		height: 80px;
	}
	
`;


const LinkContainer = styled(Link)`
	 height: 160px;
	 padding-left: 20px;
	 display: flex;
	 align-items: center;
	 text-decoration: none;
	 text-align: center;

	 @media ${device.laptop} {
		display: none;
 	}
`;
const LinkText = styled.div`
	 margin-top: 0x;
	 font-size: 24px;
	 font-weight: 600;
	 text-decoration: none !important;
	 color: black;
	 :hover {
		 cursor: pointer;
	 }
	 @media ${device.laptop} {

	}
`;


const Navigation = ({ className }) => {
	const [navOpen, setNavOpen] = useState(false)




	return (
		<>
			<NavContainer className={className} >
				<Container>
					<Row>
						<Col xs={4}>

							<CustomLink to="/" >
								<ImageContainer>
									<Image src="/logo-dark.png" height={30} width={123} quality={100}
									/>
								</ImageContainer>
							</CustomLink>


						</Col>
						<Col xs={2}>
							<LinkContainer to="/services">
									<LinkText>Palvelut</LinkText>

							</LinkContainer>
						</Col>
						<Col xs={2}>
							<LinkContainer to="/about">
									<LinkText >Meistä</LinkText>

							</LinkContainer>
						</Col>
						<Col xs={2}>
							<LinkContainer to="/contact">
								<LinkText>Yhteystiedot</LinkText>

							</LinkContainer>
						</Col>
						<Col xs={2}>

							<BurgerContainer  >

								{
									!navOpen ?
										<BurgerContent onClick={e => setNavOpen(true)} >

											<Icon icon={faBars} style={{ color: "black" }} />
											<LinkText>Menu</LinkText>
										</BurgerContent>

										:
										<BurgerContent onClick={e => setNavOpen(false)}>

											<Icon icon={faTimes} style={{ color: "black", zIndex: 10000 }} />
											<LinkText>Menu</LinkText>
										</BurgerContent>



								}




							</BurgerContainer>
						</Col>



					</Row>
				</Container>

			</NavContainer>
			{
				navOpen ?
					<OpenNav>
						<Container>
							<LinkTextMobile onClick={() => setNavOpen(false)} >
								<CustomLink to="/services" >
									Palvelut
									</CustomLink>
							</LinkTextMobile>
							<LinkTextMobile onClick={() => setNavOpen(false)} >
								<CustomLink to="/about">
									Meistä
									</CustomLink>
							</LinkTextMobile>
							<LinkTextMobile onClick={() => setNavOpen(false)} >
								<CustomLink to="/contact">
									Yhteystiedot
									</CustomLink>
							</LinkTextMobile>

							{/* {
									context.pages.map((item, i) => {
										return (
											item.fields.name !== context.t('navigation.landing-page') ?
											<LinkText key={i} onClick={() => setNavOpen(false)} >		
												<CustomLink to={`/${item.sys.id}/${item.fields.name}`}>
													{item.fields.name}
												</CustomLink>
											</LinkText>
										: 
											null
										)
										
									}
												
	
											)
										} */}


						</Container>
					</OpenNav>
					:
					<></>
			}
		</>
	);
};


export default Navigation;