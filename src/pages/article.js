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
`;

const HeroText = styled.h1`
	padding-top: 100px;
	padding-bottom: 100px;
	color: ${props => props.theme.colors.black};
`;

const Page = styled.div`
	display: flex;
	flex-direction: row;

`;

const Column = styled.div`
	flex: 1;
	margin-right: 32px;
`;

const ImageContainer = styled.img`
	object-fit: cover;
	margin-top: -80px;
	width: 100%;
	@media ${device.laptop} {
		height: 100px;
	}

`;

const Content = styled.div`
	flex: 2;
`;

const Markdown = styled.div`
	margin-top: 80px;
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


