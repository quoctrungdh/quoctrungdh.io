// reference: https://www.gatsbyjs.com/blog/2017-07-19-creating-a-blog-with-gatsby/
const { Reporter } = require("gatsby");
const path = require("path");

exports.createPages = async({ actions, graphql }) => {
    const { createPage } = actions;

    const blogPostTemplate = path.resolve("./src/layouts/BlogPost.tsx");

    const result = await graphql(
        `
            query BlogsPostByPath {
                allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
                }
            }
        `
    )

    if (result.error) {
        Reporter.panicOnBuild('Error while running GraphQL query')
        return;
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: blogPostTemplate,
            context: {}
        })
    })
}