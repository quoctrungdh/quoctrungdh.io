/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-postcss',
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/content/posts`,
				name: 'posts'
			}
		},
		"gatsby-transformer-remark"
		// {
		// 	resolve: "gatsby-transformer-remark",
		// 	options: {
		// 		plugins: [
		// 			"gatsby-remark-images"
		// 		]
		// 	}
		// }
	]
}
