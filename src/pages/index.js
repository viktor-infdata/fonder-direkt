import React from 'react'
import chunk from "lodash/chunk"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'


if (typeof window !== 'undefined') {
  window.indexPostsToShow = 10
}

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      indexPosts: PropTypes.shape({
        edges: PropTypes.array,
      }),
      featuredPosts: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  constructor() {
    super()
    let indexPostsToShow = 10
    if (typeof window !== 'undefined') {
      indexPostsToShow = window.indexPostsToShow
    }

    this.state = {
      showingMore: indexPostsToShow > 10,
      indexPostsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 400) {
      this.setState({ indexPostsToShow: this.state.indexPostsToShow + 10 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.indexPostsToShow = this.state.indexPostsToShow
  }

  render() {
    const { data } = this.props
    const { edges: featuredPosts } = data.featuredPosts
    
    let { indexPosts } = this.props.data
    const posts = indexPosts.edges.map(e => e.node)

    return (
      <Layout>
        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-desktop">
              {featuredPosts.map(({ node: featuredPost }) => (
                <div className="column" key={featuredPost.id}>
                  <div className="card has-equal-height">
                    <div className="card-image">
                      {featuredPost.frontmatter.videoId != null ? (
                        <div className="embed-responsive embed-responsive-16by9">
                          <iframe title={featuredPost.frontmatter.videoId} className="embed-responsive-item" src={"https://www.youtube.com/embed/"+featuredPost.frontmatter.videoId+"?rel=0"} allowFullScreen></iframe>
                        </div>
                      ) : (
                        <Img fluid={featuredPost.frontmatter.image.childImageSharp.fluid} alt={featuredPost.frontmatter.title} />
                      )
                      }
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <h5 className="is-size-7 mb-0">
                          <small className="has-text-grey"><time dateTime={featuredPost.frontmatter.date}>{featuredPost.frontmatter.date}</time></small>
                          {featuredPost.frontmatter.sponsored === true &&
                            <span className="has-text-grey"> &bull; <small className="has-text-grey">UPPDRAGSARTIKEL</small></span>
                          }
                        </h5>
                        <h1 className="is-size-5 mt-1 mb-2">
                          <Link to={featuredPost.fields.slug}>
                            {featuredPost.frontmatter.title}
                          </Link>
                        </h1>
                        <p>{featuredPost.excerpt}</p>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <Link className="card-footer-item button is-dark is-fullwidth is-feature-button" to={featuredPost.fields.slug}>
                        Gå till {featuredPost.frontmatter.videoId != null  ? 'videon' : 'nyheten'}
                      </Link>
                    </footer>
                  </div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <React.Fragment>
                {chunk(posts.slice(0, this.state.indexPostsToShow), 10).map((chunk, i) => (
                    <div
                      className="content"
                      key={`chunk-${i}`}
                    >
                    {chunk.map(node => (
                      <React.Fragment key={node.id}>
                        <h1 className="is-size-5">
                          <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                          </Link>
                          <span className="has-text-grey"> &bull; </span>
                          <small className="has-text-grey"><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></small>
                          {node.frontmatter.sponsored === true &&
                            <span className="has-text-grey"> &bull; <small className="has-text-grey">UPPDRAGSARTIKEL</small></span>
                          }
                        </h1>
                        {node.frontmatter.videoId != null &&
                          <div className="embed-responsive embed-responsive-16by9 mb-2">
                            <iframe title={node.frontmatter.videoId} className="embed-responsive-item" src={"https://www.youtube.com/embed/"+node.frontmatter.videoId+"?rel=0"} allowFullScreen></iframe>
                          </div>
                        }
                        {node.frontmatter.image != null &&
                          <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} className="mx-0 mt-0 mb-2" />
                        }
                        <p>
                          {node.excerpt}
                        </p>
                        <p>
                          <small><Link to={node.fields.slug}>Läs mer&hellip;</Link></small>
                        </p>
                        <hr />
                      </React.Fragment>
                      ))}
                    </div>
                  ))}
                  {!this.state.showingMore && (
                    <button className="button is-rounded is-medium is-fullwidth is-load-more"
                      onMouseDown={() => {
                      this.setState({
                        indexPostsToShow: this.state.indexPostsToShow + 10,
                        showingMore: true,
                        })
                      }}
                    >
                  Ladda fler nyheter
                  </button>
                  )}
                </React.Fragment>
                </div>
              </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  {
    indexPosts:allMarkdownRemark(
      limit: 1000,
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
            sponsored
            featured
            image {
              childImageSharp {
                fluid(maxWidth: 888, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    featuredPosts:allMarkdownRemark(
      limit: 2,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { featured: {eq: true}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            videoId
            date(formatString: "YYYY-MM-DD")
            sponsored
            featured
            image {
              childImageSharp {
                fluid(maxWidth: 1016, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
