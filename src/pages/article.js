import * as React from 'react'
import { Link, graphql } from 'gatsby'

const Article = ({ data }) => {
	return (

		<main>
			<h1>{data.contentfulArticle.title}</h1>
			<p>I'm making this by following the Gatsby Tutorial.</p>
		</main>
	)
}
export default Article

export const query = graphql`query ($slug: String!) {
	
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
		content {
			id
			content
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


