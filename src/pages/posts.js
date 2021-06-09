import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import { graphql } from 'gatsby'
import Posts from '../components/Posts'

function PostsPage({ data }) {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title="all posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: ASC }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM, DD YYYY")
          author
          category
          slug
          title
          readTime
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default PostsPage
