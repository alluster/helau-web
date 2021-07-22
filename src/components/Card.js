import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import { device } from '../device';
import CardBig from './CardBig';

const CardMedium = () => {
	return (
		<h1>CardMedium</h1>



	);
}
const CardSmall = () => {
	return (

		<h1>CardSmall</h1>

	);
};



const Card = (props) => {
	return (
	  <div>
		  {console.log}
		{(() => {
		  switch (props.cardStyle[0]) {
			case "big":
			  return <CardBig  />;
			case "small":
			  return <CardMedium />;
			case "small":
				return <CardSmall />;
			default:
			  return <h1>No size</h1>;
		  }
		})()}
	  </div>
	);
  }



export default Card;