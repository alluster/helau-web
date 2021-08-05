
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage, graphql } from "gatsby";
import { device } from '../device';
import AuthorCard from './AuthorCard';

const Container = styled.div`
	background-color: ${props => props.theme.colors.white};
	height: 100%;
	color: ${props => props.theme.colors.black};

`;

const Content = styled.div`
	max-width: 1200px;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	padding-top: 64px;
	padding-bottom: 64px;
	align-items: center;
	@media ${device.laptop} {
		flex-direction: column;
		text-align: center;
		justify-content: center;
		align-items: center;

	}
`;

const Column = styled.div`
	flex: 2;
	margin: 40px;	
	@media ${device.laptop} {
		flex: 1;
		justify-content: center;
		align-items: center;


	}
`;


const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.linkGray};
	height: 42px;
	width: 100%;
	margin-top: 16px;
	margin-bottom: 32px;
	padding-left: 20px;
	font-size: 18px;
	border-radius: 4px;

	@media ${device.laptop} {
		padding-left: 0px;
	}
	
`;

const TextArea = styled.textarea`
	border: 1px solid ${props => props.theme.colors.linkGray};
	margin-top: 16px;
	margin-bottom: 32px;
	border-radius: 4px;
	width: 100%;
	padding-left: 20px;
	font-size: 24px;
	padding-top: 20px;
	@media ${device.laptop} {
		padding-left: 0px;
	}

`;

const Button = styled.button`
	height: 64px;
	background-color: ${props => props.theme.colors.white};
	border:4px solid ${props => props.theme.colors.blue};
	color:  ${props => props.theme.colors.blue};
	text-align: center;
	font-size: 24px;
	font-weight: 600;
	border-radius: 8px;
	width: 100%;
	padding-left: 10px;
	padding-right: 10px;
	@media ${device.laptop} {
		padding-left: 0px;
		padding-right: 0px;

	}
`;

const Label = styled.label`
	font-size: 18px;
`;

const Form = styled.form`
	margin-left: auto;
	margin-right: auto;
`;

const Clear = styled.input`
	text-align: center;
	margin-top: 32px;
`;


const ContactForm = (props ) => {
	return (
		<Container>
			<Content>

				<Column>
					<h3>Voit kysyä meiltä mitä vain liittyen yhteiseen projektiimme.</h3>
					<p>Vastaamme mielellämme tarjouspyyntöihin, sekä yhteistyöhaknkkeisiin. Lähetä rohkeasti viesti. <br/> <br/>Voit myös lähtettää meille sähköpostia:</p>
					<h5 style={{ marginBottom: "0px" }}>
					aleksanteri@helau.io
				</h5>
				
				</Column>
				<Column>
					<Form form method="post" action="https://getform.io/f/3c369d83-1968-4cb2-a847-807c9fc830c9" >
						<Label>
							Nimesi
				</Label>

						<Input type="text" name="name" id="name" />
						<Label>
							Email
   							 <Input type="email" name="email" id="email" />
						</Label>
				
						<Label>
							Viesti
    						<TextArea name="message" id="message" wrap="hard" />
						</Label>
							<Button type="submit">Lähetä viesti</Button>
					</ Form>
				</Column>
				</Content>

		</Container>


	);
};


export default ContactForm;



