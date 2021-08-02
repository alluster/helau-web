
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage, graphql } from "gatsby";
import { device } from '../device';
import AuthorCard from './AuthorCard';

const Container = styled.div`
	background-color: ${props => props.theme.colors.red};
	height: 100%;
	color: ${props => props.theme.colors.yellow};

`;

const Content = styled.div`
	max-width: 1200px;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	flex-direction: row;
	padding-top: 64px;
	padding-bottom: 64px;
	
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
		margin: 24px;	


	}
`;


const Input = styled.input`
	border: 1px solid ${props => props.theme.colors.yellow};
	height: 64px;
	width: 100%;
	margin-top: 16px;
	margin-bottom: 32px;
	padding-left: 20px;
	font-size: 24px;
`;

const TextArea = styled.textarea`
	border: 1px solid ${props => props.theme.colors.yellow};
	margin-top: 16px;
	margin-bottom: 32px;
	width: 100%;
	padding-left: 20px;
	font-size: 24px;
	padding-top: 20px;

`;

const Button = styled.button`
	height: 64px;
	background-color: ${props => props.theme.colors.yellow};
	color:  ${props => props.theme.colors.orange};
	text-align: center;
	font-size: 32px;
	width: 100%;
	padding-left: 10px;
	padding-right: 10px;
`;

const Label = styled.label`
	font-size: 24px;
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
					<h2>Ota yhteyttä!</h2>
					<h4>Voit kysyä meiltä mitä vain liittyen yhteiseen projektiimme.</h4>
					<p>Vastaamme mielellämme tarjouspyyntöihin, sekä yhteistyöhaknkkeisiin. Lähetä rohkeasti viesti. <br/> <br/>Voit myös lähtettää meille sähköpostia:</p>
					<AuthorCard 
						name="Aleksanteri Heliövaara"
						description="Make thinks happen, Co Founder"
						email="aleksanteri@helau.io"
					/>
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
							<Button type="submit">Lähetä</Button>
							<Clear type="reset" value="Tyhjennä kaavake" />
					</ Form>
				</Column>
				</Content>

		</Container>


	);
};


export default ContactForm;



