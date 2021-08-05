

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
  })
  
  module.exports = {
	siteMetadata: {
		title: "Helau Solutions Oy",
		titleTemplate: "%s · Digitaaliset palvelut",
		description: "Luomme moderneja digitaalisia kokemuksia avoimemman maailman puolesta.",
		siteUrl: process.env.SITE_URL, // No trailing slash allowed!
		image: `${process.env.SITE_URL}/seo.jpeg`, // Path to your image you placed in the 'static' folder
		twitterUsername: "",
	  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-B20WRHEY1Y",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
	"gatsby-plugin-mdx",
	{
		resolve: `gatsby-plugin-google-fonts`,
		options: {
		  fonts: [
			`Montserrat Alternates\:400,600` // you can also specify font weights and styles
		  ],
		  display: 'swap'
		}
	  },
	{
		resolve: `gatsby-plugin-sharp`,
		options: {
		  defaults: {
			formats: [`auto`, `webp`],
			placeholder: `dominantColor`,
			quality: 100,
			breakpoints: [750, 1080, 1366, 1920],
			backgroundColor: `transparent`,
			tracedSVGOptions: {},
			blurredOptions: {},
			jpgOptions: {},
			pngOptions: {},
			webpOptions: {},
			avifOptions: {},
		  },
		},
	  },    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
	  },
	 
      __key: "pages",
    },
  ],
};
