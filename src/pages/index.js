import React from 'react'
import chunk from 'lodash/chunk'
import * as PropTypes from 'prop-types'
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
                            <iframe
                              title={featuredPost.frontmatter.videoId}
                              className="embed-responsive-item"
                              src={
                                'https://www.youtube.com/embed/' +
                                featuredPost.frontmatter.videoId +
                                '?rel=0'
                              }
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <Img
                            fluid={
                              featuredPost.frontmatter.image.childImageSharp
                                .fluid
                            }
                            alt={featuredPost.frontmatter.title}
                          />
                        )}
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h5 className="is-size-7 mb-0">
                            <small className="has-text-grey">
                              <time dateTime={featuredPost.frontmatter.date}>
                                {featuredPost.frontmatter.date}
                              </time>
                            </small>
                            {featuredPost.frontmatter.sponsored === true && (
                              <span className="has-text-grey">
                                {' '}
                                &bull;{' '}
                                <small className="has-text-grey">
                                  UPPDRAGSARTIKEL
                                </small>
                              </span>
                            )}
                            {featuredPost.frontmatter.templateKey ===
                              'education-post' && (
                              <span className="has-text-grey">
                                {' '}
                                &bull;{' '}
                                <small className="has-text-grey">
                                  <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="is-fd-akademi"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>FD Akademi</title>
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                                  </svg>
                                  FD AKADEMI
                                </small>
                              </span>
                            )}
                            {featuredPost.frontmatter.english === true && (
                              <span className="has-text-grey">
                                {' '}
                                &bull;{' '}
                                <small className="has-text-grey">
                                  <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    className="is-language"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <title>Language</title>
                                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                                  </svg>
                                  ENGLISH
                                </small>
                              </span>
                            )}
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
                        <Link
                          className="card-footer-item button is-dark is-fullwidth is-feature-button"
                          to={featuredPost.fields.slug}
                        >
                          {featuredPost.frontmatter.templateKey ===
                            'blog-post' && (
                            <React.Fragment>Gå till nyheten</React.Fragment>
                          )}
                          {featuredPost.frontmatter.templateKey ===
                            'video-post' && (
                            <React.Fragment>Gå till videon</React.Fragment>
                          )}
                          {featuredPost.frontmatter.templateKey ===
                            'education-post' && (
                            <React.Fragment>Gå till FD Akademi</React.Fragment>
                          )}
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
                  {chunk(posts.slice(0, this.state.indexPostsToShow), 10).map(
                    (chunk, i) => (
                      <div className="content" key={`chunk-${i}`}>
                        {chunk.map(node => (
                          <React.Fragment key={node.id}>
                            <h1 className="is-size-5">
                              <Link to={node.fields.slug}>
                                {node.frontmatter.title}
                              </Link>
                              <span className="has-text-grey"> &bull; </span>
                              <small className="has-text-grey">
                                <time dateTime={node.frontmatter.date}>
                                  {node.frontmatter.date}
                                </time>
                              </small>
                              {node.frontmatter.sponsored === true && (
                                <span className="has-text-grey">
                                  {' '}
                                  &bull;{' '}
                                  <small className="has-text-grey">
                                    UPPDRAGSARTIKEL
                                  </small>
                                </span>
                              )}
                              {node.frontmatter.templateKey ===
                                'education-post' && (
                                <span className="has-text-grey">
                                  {' '}
                                  &bull;{' '}
                                  <small className="has-text-grey">
                                    <svg
                                      role="img"
                                      viewBox="0 0 24 24"
                                      className="is-fd-akademi"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <title>FD Akademi</title>
                                      <path d="M0 0h24v24H0z" fill="none" />
                                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                                    </svg>
                                    FD AKADEMI
                                  </small>
                                </span>
                              )}
                              {node.frontmatter.english === true && (
                                <span className="has-text-grey">
                                  {' '}
                                  &bull;{' '}
                                  <small className="has-text-grey">
                                    <svg
                                      role="img"
                                      viewBox="0 0 24 24"
                                      className="is-language"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <title>Language</title>
                                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
                                    </svg>
                                    ENGLISH
                                  </small>
                                </span>
                              )}
                            </h1>
                            {node.frontmatter.videoId != null && (
                              <div className="embed-responsive embed-responsive-16by9 mb-2">
                                <iframe
                                  title={node.frontmatter.videoId}
                                  className="embed-responsive-item"
                                  src={
                                    'https://www.youtube.com/embed/' +
                                    node.frontmatter.videoId +
                                    '?rel=0'
                                  }
                                  allowFullScreen
                                />
                              </div>
                            )}
                            {node.frontmatter.image != null && (
                              <Img
                                fluid={
                                  node.frontmatter.image.childImageSharp.fluid
                                }
                                alt={node.frontmatter.title}
                                className="mx-0 mt-0 mb-2"
                              />
                            )}
                            <p>{node.excerpt}</p>
                            <p>
                              <small>
                                <Link to={node.fields.slug}>
                                  Läs mer&hellip;
                                </Link>
                              </small>
                            </p>
                            <hr />
                          </React.Fragment>
                        ))}
                      </div>
                    )
                  )}
                  {!this.state.showingMore && (
                    <button
                      className="button is-rounded is-medium is-fullwidth is-load-more"
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
    indexPosts: allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          templateKey: { regex: "/blog-post|video-post|education-post/" }
        }
      }
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
            english
            image {
              childImageSharp {
                fluid(maxWidth: 888, quality: 85) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    featuredPosts: allMarkdownRemark(
      limit: 2
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { featured: { eq: true } } }
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
            english
            image {
              childImageSharp {
                fluid(maxWidth: 1016, quality: 85) {
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
