import React, { useContext, useState, useEffect } from 'react';
import styled  from 'styled-components';
import Container from './Container';
import { Row, Col } from 'react-flexbox-grid';
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { device } from '../device';
import CustomLink from './CustomLink';
import { StaticImage } from "gatsby-plugin-image"

const logo = '../images/logo-dark.png'

const NavContainer = styled.div`
	position: relative;
	min-width: 100%;
	z-index: 1000;
	height: 160px;
	top: 0;
	background-color: white;

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


const ImageContainer = styled.div `
	height: 160px;
	text-align: left;
	align-items: center;
	padding-top: 65px;
	:hover {
		cursor: pointer;
	}
	@media ${device.laptop} {
		height: 160px;
	}
	
`

const OpenNav = styled.div`
	top: 0;
	min-height: 100vh;
	background: rgba(255, 255, 255, 0.98);
	text-align: center;
	padding-top: 50px;
	z-index: 1002;
	position: fixed;
	width: 100vw;
	@media ${device.laptop} {
		position: fixed;
		height: calc(100vh + 200px);
		text-align: left;
 	}

`;

const LinkText = styled.h2 `
	margin-top: 10px;
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
	

`;
const BurgerContent = styled.div`
	height: 160px;
	padding-left: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;


const LinkContainer = styled.div `
	 height: 160px;
	 padding-left: 20px;
	 display: flex;
	 align-items: center;
	 justify-content: flex-end;
	 @media ${device.laptop} {
		display: none;
 	}
`;


const Navigation = ({ className }) => {
	const [navOpen, setNavOpen] = useState(false)




    return(
		<>
		<NavContainer className={className} >
			<Container>
				<Row>
					<Col xs={4}>
						{
							navOpen ? 
						
								""
								: 
								
								<CustomLink to="/" >
									<ImageContainer>
										<StaticImage src={logo}       layout="fixed" height={30} width={123} quality={100}
/>
									</ImageContainer>
								</CustomLink>                
				
						}
					</Col>
					<Col xs={2}>
						<LinkContainer>
							<h5>Our Services</h5>
						</LinkContainer>
					</Col>
					<Col xs={2}>
						<LinkContainer>
							<h5>About</h5>
						</LinkContainer>
					</Col>
					<Col xs={2}>
						<LinkContainer>
							<h5>Careers</h5>
						</LinkContainer>
					</Col>
					<Col xs={2}>

					<BurgerContainer  > 
						<BurgerContent>

						{
							!navOpen ? 
							
							<Icon   onClick={e => setNavOpen(true)} icon={faBars} style={{color: "black"}}/>
							: 
							<Icon  onClick={e => setNavOpen(false)} icon={faTimes} style={{color: "black"}}/>


						}
													<h5>Menu</h5>

													</BurgerContent>


						</BurgerContainer>	
					</Col>


						
				</Row>
			</Container>

		</NavContainer>        
					{
						navOpen ? 
						<OpenNav>
							<Container>
								<LinkText onClick={() => setNavOpen(false)} >		
									<CustomLink to="/" >
										Home
									</CustomLink>
								</LinkText>
								<LinkText onClick={() => setNavOpen(false)} >		
									<CustomLink to="/about">
										About
									</CustomLink>
								</LinkText>
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