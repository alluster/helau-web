import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../device';

const Wrapper = styled.div`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
	padding-right: 32px;
	
	@media ${device.laptop} {
	
		}

`;



const Container = ({ children, className }) => {
	return(
		<Wrapper className={className}>
			{children}
		</Wrapper>
	);
};

Container.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
		PropTypes.string
	])
};

export default Container;