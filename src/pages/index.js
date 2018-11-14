import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                {posts
                  .map(({ node: post }) => (
                    <div
                      className="content"
                      style={{ borderBottom: '1px solid #eaecee', padding: '0 4em 2em 4em', marginBottom: '2em' }}
                      key={post.id}
                    >
                      <h1 className="is-size-5">
                        <Link className="has-text-primary" to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small className="has-text-grey-dark">{post.frontmatter.date}</small>
                      </h1>
                      <p>
                        {post.excerpt} <Link to={post.fields.slug}>Läs mer&hellip;</Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
