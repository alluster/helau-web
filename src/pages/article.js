import * as React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import AuthorCard from '../components/AuthorCard';



// form styles 

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





// form styles

const Hero = styled.div`
	width: 100%;
	height: 500px;
	background-color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		height: 100%;
	}
`;

const HeroText = styled.h1`
	padding-top: 100px;
	padding-bottom: 30px;
	color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 0px;
	}
`;

const LeadingText = styled.h3`
	padding-top: 10px;
	padding-bottom: 30px;
	color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 0px;
		padding-bottom: 0px;
	}
`;

const Page = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 60px;

	@media ${device.laptop} {
		flex-direction: column;

	}

`;

const Column = styled.div`
	flex: 1;
	margin-right: 32px;
	@media ${device.laptop} {
		margin-right: 0px;

	}
`;

const ImageContainer = styled.img`
	object-fit: cover;
	width: 100%;
	@media ${device.laptop} {
		height: 200px;
		margin-top: 0px;

	}

`;

const Content = styled.div`
	flex: 2;
	background-color: white;
	margin-left: -80px;
	margin-top: 40px;
	padding: 60px;
	@media ${device.laptop} {
		flex: 1;
		margin-left: 0px;
		margin-top: 0px;
		padding: 0px;
	}
	
`;

const Divider = styled.div `
	height: 100px;
`;

const Markdown = styled.div`
h3 {
	margin-bottom: 60px;
}
li {
	font-size: 24px;
	line-height: 40px;
}

@media ${device.laptop} {
	h3 {
		margin-bottom: 20px;
	}
	li {
		font-size: 16px;
		line-height: 24px;
	}
}
`;






const Article = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.contentfulArticle.title}
				description={data.contentfulArticle.description.description}
				image={data.contentfulArticle.image.file.url}
				article="true"
			/>
			<Hero>
				<Container>
					<HeroText>{data.contentfulArticle.title}</HeroText>
					<LeadingText>{data.contentfulArticle.leadingText}</LeadingText>
				</Container>
			</Hero>
			<Container>

				<Page>
					<Column>
					<ImageContainer src={data.contentfulArticle.image.file.url} />

					</Column>
					<Content>
						<Markdown
							dangerouslySetInnerHTML={{
								__html: data.contentfulArticle.content.childMarkdownRemark.html,
							}}
						/>
					<Divider />
						<h3>Haluatko kuulla lisää?</h3>
						<p>Lähetä meille viesti niin otamme heti yhteyttä!</p>
					<form form method="post" action="https://getform.io/f/3c369d83-1968-4cb2-a847-807c9fc830c9" >
				
						<Label>
							Email osoitteesi
   							 <Input type="email" name="email" id="email" />
						</Label>
				
						<Label>
							Viesti
    						<TextArea name="message" id="message" wrap="hard" />
						</Label>
							<Button type="submit">Lähetä viesti</Button>
					</form>
						<Divider />
						<AuthorCard
							name={data.contentfulArticle.author.personName}
							description={data.contentfulArticle.author.personDesxription}
							image={data.contentfulArticle.author.personImage.file.url}
							email={data.contentfulArticle.author.personEmail}
						/>
					</Content>

				</Page>
			</Container>

		</Layout>
	)
}
export default Article

export const query = graphql`query ($slug: String) {
	
    contentfulArticle(slug: { eq: $slug }) {
		id
		image {
			file {
			url
			fileName
			contentType
			}
		}
		title
		leadingText
		description {
			description
		}
		content {
			childMarkdownRemark {
				html
			  }
		}
		tags
		author {
			id
			personImage {
			file {
				url
			}
			}
			personEmail
			personDesxription
			personName
		}
		}
  }`


