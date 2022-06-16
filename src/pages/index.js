import * as React from "react";
import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import { Link, graphql } from 'gatsby';
import Container from "../components/Container";
import styled from "styled-components";
import SEO from '../components/seo';
import ContactForm from "../components/ContactForm";
import CardGrid from "../components/CardGrid";


const CardGridColumn = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: column;
	flex: 2;
	
	
`;

const IndexPage = ({ data }) => {
	return (
		<Layout page="home">
			<SEO title="Helau Solutions Oy" description="Luomme moderneja digitaalisia kokemuksia avoimemman maailman puolesta." image="/seo.jpeg" article="false"/>

			<HeroHome />
			<Container>
				<CardGrid content={data.allContentfulArticle.edges} />

				{/* <CardGrid>

				{
					data.allContentfulArticle.edges.map(({ node, i }) => {
						return (
							<div >
								{(() => {
								switch (node.cardStyle[0]) {
									case "big":
										return <CardBig
												key={i}
												title={node.title}
												leadingText={node.leadingText}
												image={node.image.file.url}
											/>;
									case "small":
										return <CardBig  
												key={i}	
												title={node.title}
												leadingText={node.leadingText}
												image={node.image.file.url}

											/>;
									case "medium":
										return <CardBig  
												key={i}
												title={node.title}
												leadingText={node.leadingText}
												image={node.image.file.url}

											/>;
									default:
									return <h1>No size</h1>;
								}
								})()}
							</div>
						)
					})

				}
				</CardGrid> */}
			</Container>

		</Layout>
	)
}

export default IndexPage

export const query = graphql`query MyQuery {
	allContentfulArticle
	(filter: {tags: {eq: "article"}})
	{
		edges {
			node {
				cardStyle
				id
				slug
				author {
					personEmail
					personName
					personImage {
					file {
						url
					}
					}
				}
				tags
				title
				leadingText
				image {
					file {
						url
						}
					}
				}
			}
		}
		contentfulAuthor(contentful_id: {eq: "XTQ8ZZ7WYZR89yVvWcOT9"}) {
			personEmail
			personDescription
			personImage {
			  file {
				url
			  }
			}
		  }
	}`