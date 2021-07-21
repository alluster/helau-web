import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from '../theme';
import Navigation from "./Navigation";
import Footer from "./Footer";

import { device } from '../device';

const GlobalStyle = createGlobalStyle`
    body, html {
        margin: 0px;
        padding: 0px;
		max-width: 100% ;
		min-height: 100vh;
		font-family: 'Montserrat Alternates', sans-serif !important;
		font-display: swap;
		color: ${props => props.theme.colors.black};
		hyphens: manual;
		text-rendering: optimizeLegibility;
		background-color: ${props => props.theme.colors.background}
		
	}
    
    h1 {
		font-size: 90.4px;
		line-height: 112px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 28.8px;
			line-height: 40px;
		 }
    }
    h2 {
		font-size: 63.96px;
		line-height: 80px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 25.63px;
			line-height: 32px;
		 }
    }
    h3 {
		font-size: 45.23px;
		line-height: 48px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 22.78px;
			line-height: 32px;
		 }
    }
    h4 {
		font-size: 31.99px;
		line-height: 40px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 20.25px;
			line-height: 24px;
		 }
    }
    h5 {
		font-size: 22.62px;
		line-height: 24px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 18px;
			line-height: 24px;
		 }
    }
    h6 {
		font-size: 16px;
		line-height: 24px
        margin: 0px;
		font-weight: 600;
		@media ${device.tablet} {
			font-size: 16px;
			line-height: 24px;
		 }
	}
	p {
		font-size: 16px;
		line-height: 24px
        margin: 0px;
		font-weight: 400;
		@media ${device.tablet} {
			font-size: 16px;
			line-height: 24px;
		 }
	}
    img {
        max-width: 100%;
    }
    a {
		text-decoration: none;
    }
    a:link {
		text-decoration: none;
		::-webkit-any-link {
			text-decoration: none;
		}
    }
    a:focus {
		text-decoration: none;
    }
    a:active {
		text-decoration: none;
    }
    a:visited {
		text-decoration: none;
    }
    a:hover {
		cursor: pointer !important;
		text-decoration: none;
    }
    button {
		all: unset;
		font-family: 'Open Sans', sans-serif;
		

	}
	button:hover {
		cursor: pointer !important;
	}





    input {
		all: unset;
		font-family: 'Open Sans', sans-serif;

        ::-webkit-input-placeholder {
    }
    :-moz-placeholder {
        /* FF 4-18 */
        opacity: 1;
    }
    ::-moz-placeholder {
        /* FF 19+ */
        opacity: 1;
    }
    :-ms-input-placeholder {
        /* IE 10+ */
    }
    ::-ms-input-placeholder {
        /* Microsoft Edge */
    }
    ::placeholder {
        /* modern browser */
    }
    
    
`;
export default function Layout({ children }) {
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
			<Navigation />

				<GlobalStyle  />
				{children}
				<Footer />
			</ThemeProvider>
		</React.Fragment>
	)
}