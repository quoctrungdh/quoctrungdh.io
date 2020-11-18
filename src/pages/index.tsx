import React from "react";
import { graphql, Link } from "gatsby";

import MainLayout from "../layouts/Main";

export default function Home({ data }) {
	const { posts } = data.blog;

	return (
		<MainLayout>
			<h2 className="mb-8 text-2xl">Blog posts</h2>
			<ul>
				{posts.map((post) => {
					const { meta, excerpt, id } = post;
					return (
						<li className="mb-6" key={id}>
							<Link to={meta.path}><h3 className="text-xl">{meta.title}</h3></Link>
							<p className="text-sm text-gray-900">{meta.date}</p>
							<p>{excerpt}</p>
						</li>
					)
				})}
			</ul>
		</MainLayout>
	)
}

export const pageQuery = graphql`
	query MyBlogPostsQuery {
		blog: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
			posts: nodes {
					meta: frontmatter {
						date(formatString: "D MMM YYYY")
						title
						path
					}
				id
				excerpt
			}
		}
	}
`