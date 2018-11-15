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
              <div className="column is-8 is-offset-2">
                {posts
                  .map(({ node: post }) => (
                    <div
                      className="content"
                      key={post.id}
                    >
                      <h1 className="is-size-5">
                        <Link to={post.fields.slug}>
                          {post.frontmatter.title}
                        </Link>
                        <span> &bull; </span>
                        <small className="has-text-grey-dark">{post.frontmatter.date}</small>
                      </h1>
                      {post.frontmatter.videoId != null &&
                        <div className="embed-responsive embed-responsive-16by9 mb-2">
                          <iframe title={post.frontmatter.videoId} className="embed-responsive-item" src={"https://www.youtube.com/embed/"+post.frontmatter.videoId+"?rel=0"} allowFullScreen></iframe>
                        </div>
                      }
                      <p>
                        {post.excerpt} <Link to={post.fields.slug}>Läs mer&hellip;</Link>
                      </p>
                      <hr />
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
      filter: { frontmatter: { templateKey: {regex: "/blog-post|video-post/"}}}
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
            videoId
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
