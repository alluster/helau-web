import * as React from "react";
import Layout from '../components/Layout';
import HeroHome from '../components/HeroHome';
import CardBig from '../components/CardBig';
import { Link, graphql } from 'gatsby';
import Container from "../components/Container";
import styled from "styled-components";
import CardSmall from "../components/CardSmall";
import SEO from '../components/seo';

const CardGrid = styled.div`
	display: flex;
	flex-wrap: no-wrap;
	min-width: 100%;
	justify-content: space-between;
	flex-direction: row;
	margin-top: 50px;
	margin-bottom: 50px;
	overflow-x: auto;

`;
const CardGridColumn = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	flex-direction: column;
	flex: 2;
	
	
`;

const IndexPage = ({ data }) => {
	return (
		<Layout >
			<SEO title="Hello" description="World" image="/seo.jpeg" article="true"/>

			<HeroHome />
			<Container>
				<CardGrid>

					{
						data.allContentfulArticle.edges.map(({ node, i }) => {
							
								return (
								
									<CardSmall
										key={i}
										title={node.title}
										leadingText={node.leadingText}
										image={node.image.file.url}
										id={node.id}
										slug={node.slug}
									/>
	
	
								)
							
						
						})

					}
					
					
				</CardGrid>
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
	allContentfulArticle {
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
	}`