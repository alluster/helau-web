import * as React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';
import AuthorCard from '../components/AuthorCard';

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


