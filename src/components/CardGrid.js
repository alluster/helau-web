
import React from 'react';
import styled from 'styled-components';
import { Link, GatsbyImage } from "gatsby";
import { device } from '../device';
import Card from './Card';

const Grid = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	margin-top: 50px;
	margin-bottom: 50px;

`;

const CardGrid = ({content}) => {
	return (
		
		<Grid>

					{
						content.map(({ node, i }) => {
							
								return (
								
									<Card
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
					
				</Grid>

	);
};


export default CardGrid;