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
	color: ${props => props.theme.colors.red}`;

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






const Contact = ({ data }) => {
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
			<Container>

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
			</Container>

		</Layout>
	)
}
export default Contact

export const query = graphql`query ContactQuery {
	contentfulPage(contentful_id: {eq: "52Oaaqah9yunIQ9spofcI"}) {
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


