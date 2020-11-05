import React from "react";
import { graphql, Link } from "gatsby";

import MainLayout from "../layouts/Main";

export default function Home({ data }) {
	const { posts } = data.blog;

	return (
		<MainLayout>
			<h2>Blog</h2>
			<ul>
				{posts.map((post) => {
					const { meta, excerpt, id } = post;
					return (
						<li key={id}>
							<Link to={meta.path}><h3>{meta.title}</h3></Link>
							<i>{meta.date}</i>
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
		blog: allMarkdownRemark {
			posts: nodes {
					meta: frontmatter {
						date(fromNow: true)
						title
						path
					}
				id
				excerpt
			}
		}
	}
`