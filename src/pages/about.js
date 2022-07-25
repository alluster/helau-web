import * as React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Layout from '../components/Layout';
import Container from '../components/Container';
import styled from 'styled-components';
import { device } from '../device';


const Hero = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
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
		padding-bottom: 0px;

	}
`;
const Page = styled.div`
	display: flex;
	flex-direction: row;
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
	margin-top: 80px;
	width: 100%;
	@media ${device.laptop} {
		height: 200px;
		margin-top: 0px;

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
		
			<Container>

				<Page>
					<Column>
						<ImageContainer src={data.contentfulPage.image.file.url} />

					</Column>
					<Content>
						<HeroText>{data.contentfulPage.title}</HeroText>

						<Markdown
							dangerouslySetInnerHTML={{
								__html: data.contentfulPage.content.childMarkdownRemark.html,
							}}
						/>
						
					</Content>

				</Page>
			</Container>

		</Layout>
	);
};
export default About;

export const query = graphql`query AboutQuery {
	contentfulPage(contentful_id: {eq: "3FCoahurtrxtJrs4Wzbrn9"}) {
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
  `;


