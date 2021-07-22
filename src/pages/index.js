import * as React from "react"
import Layout from '../components/Layout'
import HeroHome from '../components/HeroHome'
import CardBig from '../components/CardBig';
import { Link, graphql } from 'gatsby'
import Container from "../components/Container"
import styled from "styled-components";


const CardGrid = styled.div`
	display: flex;
	flex-direction: row;
`;


const IndexPage = ({ data }) => {
	return (
		<Layout >
			<HeroHome />
			<Container>
				<CardGrid>

				{
					data.allContentfulArticle.edges.map(({ node, i }) => {
						return (
							<div key={i}>
								{(() => {
								switch (node.cardStyle[0]) {
									case "big":
										return <CardBig  
												title={node.title}
												leadingText={node.leadingText}
												image={node.image.file.url}
											/>;
									case "small":
										return <CardBig  
												title={node.title}
												leadingText={node.leadingText}
												image={node.image.file.url}

											/>;
									case "small":
										return <CardBig  
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
				</CardGrid>

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