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
	height: 100%;
	background-color: ${props => props.theme.colors.white};
	@media ${device.laptop} {
		height: 100%;

	}
`;

const HeroText = styled.h1`
	padding-top: 100px;
	padding-bottom: 200px;
	color: ${props => props.theme.colors.black};	
	@media ${device.laptop} {
		padding-top: 30px;
		padding-bottom: 30px;
	}
`;
const Page = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
	padding-right: 32px;
	@media ${device.laptop} {
		flex-direction: column;

	}
`;

const Column = styled.div`
	flex: 1;
	margin-right: 60px;
	@media ${device.laptop} {
		margin-right: 0px;

	}
`;

const ImageContainer = styled.img`
	object-fit: cover;
	margin-top: -80px;
	@media ${device.laptop} {
		height: 200px;
		margin-top: 0px;
		width: 100%;


	}
`;

const Content = styled.div`
	flex: 2;
	@media ${device.laptop} {
		flex: 1;

	}
`;

const Markdown = styled.div`
	margin-top: -80px;
	word-wrap: break-word;
	overflow-wrap: break-word;
	li {
		font-size: 24px;
		line-height: 40px;
	}
  	-webkit-hyphens: auto;
	-moz-hyphens: auto;
	hyphens: auto;
	hyphens: auto;
	max-width: 900px;
	@media ${device.laptop} {
		margin-top: 30px;

	}
`;






const About = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.contentfulPage.title}
				description={data.contentfulPage.description}
				image={data.contentfulPage.image.file.url}
				article="true"
			/>
			<Hero>
				<Container>
					<HeroText>{data.contentfulPage.title}</HeroText>
				</Container>
			</Hero>

				<Page>
					<Column>
					<ImageContainer src={data.contentfulPage.image.file.url} />

					</Column>
					<Content>
						<Markdown
							dangerouslySetInnerHTML={{
								__html: data.contentfulPage.content.childMarkdownRemark.html,
							}}
						/>
						
					</Content>

				</Page>

		</Layout>
	)
}
export default About

export const query = graphql`query ServiceQuery {
	contentfulPage(contentful_id: {eq: "3zC6OYsCKW1YGd2xjLi0di"}) {
	  image {
		file {
		  url
		}
		description
	  }
	  slug
	  title
	  leadingText
	  content {
		childMarkdownRemark {
			html
			}
	  }
	}
  }
  `


