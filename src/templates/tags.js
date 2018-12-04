import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <li key={post.node.fields.slug}>
        <h2 className="is-size-5">
          <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
          <span className="has-text-grey"> &bull; </span>
          <small className="has-text-grey"><time dateTime={post.node.frontmatter.date}>{post.node.frontmatter.date}</time></small>
        </h2><hr />
        
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} nyhet${
      totalCount === 1 ? '' : 'er'
    } taggad med ${tag}`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`}>
            <meta name="description" content={`Nyheter taggade med ${tag} på Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder.`} />
            <meta property="og:title" content={`${tag} | ${title}`} />
            <meta property="og:url" content={`https://fonderdirekt.se/taggar/${tag}/`} />
            <meta property="og:description" content={`Nyheter taggade med ${tag} på Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder.`} />
          </Helmet>
          <div className="container">
            <div className="columns is-centered">
              <div
                className="column is-8"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="title is-size-6 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <p>
                  <Link to="/taggar/">Bläddra bland alla taggar</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
