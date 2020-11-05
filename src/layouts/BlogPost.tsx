import React from "react";
import { graphql } from "gatsby";

import MainLayout from "./Main";

export default function BlogPost({ data }) {
    const { meta, html } = data.blog;
    return  (
        <MainLayout>
            <article>
                <h4>{meta.title}</h4>
                <p dangerouslySetInnerHTML={{ __html: html }}></p>
            </article>
        </MainLayout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        blog: markdownRemark(frontmatter: { path: { eq: $path } }) {
            meta: frontmatter {
                title
                path
                date
            }
            html
        }
    }
`