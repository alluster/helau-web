import * as React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Markdown from '../components/Markdown';
import Layout from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import AuthorCard from '../components/AuthorCard';

const ImageContainer = styled.img`
	background-color: green;
	object-fit: cover;
	flex: 2;
	width: 30%;
	margin-top: -80px;
	@media ${device.laptop} {
		height: 100px;
	}

`;

const Hero = styled.div`
	width: 100%;
	height: 500px;
	background-color: ${props => props.theme.colors.red};
`;


const HeroText = styled.h1`
	padding-top: 100px;
	padding-bottom: 100px;
	color: white;
`;

const Content = styled.div`
	margin-top: 40px;
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
				</Container>
			</Hero>
			<Container>
				<ImageContainer src={data.contentfulArticle.image.file.url}/>
				<Content
					dangerouslySetInnerHTML={{
						__html: data.contentfulArticle.content.childMarkdownRemark.html,
					}}
				/>
				<AuthorCard 
					name={data.contentfulArticle.author.personName}
					description={data.contentfulArticle.author.personDesxription}
					image={data.contentfulArticle.author.personImage.file.url}
					email={data.contentfulArticle.author.personEmail}
				/>
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


