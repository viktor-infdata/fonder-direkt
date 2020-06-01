import React from 'react'
import chunk from 'lodash/chunk'
import * as PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

if (typeof window !== 'undefined') {
  window.educationPostsToShow = 9
}

class IndexPage extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        edges: PropTypes.array,
      }),
    }),
  }

  constructor() {
    super()
    let educationPostsToShow = 9
    if (typeof window !== 'undefined') {
      educationPostsToShow = window.educationPostsToShow
    }

    this.state = {
      showingMore: educationPostsToShow > 9,
      educationPostsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 400) {
      this.setState({
        educationPostsToShow: this.state.educationPostsToShow + 9,
      })
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
    window.educationPostsToShow = this.state.educationPostsToShow
  }

  render() {
    let { allMarkdownRemark } = this.props.data
    const posts = allMarkdownRemark.edges.map(e => e.node)

    return (
      <Layout>
        <React.Fragment>
          <section className="hero is-dark is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 class="title">
                  FD AKADEMI
                </h1>
                <article class="message is-fd-akademi">
                  <div class="message-body">
                    FD Akademi erbjuder utbildning och förståelse av finansiella termer, ämnen och teman relaterade till fonder samt andra finansiella investeringsprodukter. FD Akademi vill bryta barriärerna när det gäller finans, och ge alla som vill lära sig mer den möjligheten via vårt innehåll. Det har aldrig varit viktigare att kunna ta kontroll över sina ekonomiska beslut, och FD Akademi kommer tillsammans med Fonder Direkt att tillhandahålla den information som du behöver för att kunna göra just detta.
                  </div>
                </article>
              </div>
            </div>
          </section>
          <section className="hero is-light">
            <Helmet title="FD Akademi | Fonder Direkt">
              <meta
                name="description"
                content="Senaste utbildningsmaterialet från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder."
              />
              <meta property="og:title" content="FD Akademi | Fonder Direkt" />
              <meta
                property="og:url"
                content="https://fonderdirekt.se/fd-akademi/"
              />
              <meta
                property="og:description"
                content="Senaste utbildningsmaterialet från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder."
              />
            </Helmet>
            <div className="hero-body">
              <div className="container">
                <div className="columns is-multiline">
                  {chunk(posts.slice(0, this.state.educationPostsToShow), 9).map(
                    (chunk, i) => (
                      <React.Fragment key={`chunk-${i}`}>
                        {chunk.map(node => (
                          <div
                            className="column is-one-quarter-desktop is-half-tablet"
                            key={node.id}
                          >
                            <div className="card has-equal-height">
                              <div className="card-image">
                                {node.frontmatter.videoId != null ? (
                                  <div className="embed-responsive embed-responsive-16by9">
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
                                ) : (
                                  <Img
                                    fluid={
                                      node.frontmatter.image.childImageSharp.fluid
                                    }
                                    alt={node.frontmatter.title}
                                  />
                                )}
                              </div>
                              <div className="card-content">
                                <div className="content">
                                  <h5 className="is-size-7 mb-0">
                                    <small className="has-text-grey">
                                      <time dateTime={node.frontmatter.date}>
                                        {node.frontmatter.date}
                                      </time>
                                    </small>
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
                                  </h5>
                                  <h1 className="is-size-5 mt-1 mb-2">
                                    <Link to={node.fields.slug}>
                                      {node.frontmatter.title}
                                    </Link>
                                  </h1>
                                  <p>{node.excerpt}</p>
                                </div>
                              </div>
                              <footer className="card-footer">
                                <Link
                                  className="card-footer-item button is-dark is-fullwidth is-feature-button"
                                  to={node.fields.slug}
                                >
                                  Gå till FD Akademi
                                </Link>
                              </footer>
                            </div>
                          </div>
                        ))}
                    </React.Fragment>
                  )
                )}
              </div>
              {allMarkdownRemark.totalCount > 9 && (
                <div className="columns is-centered">
                  <div className="column is-8">
                    {!this.state.showingMore && (
                      <button
                        className="button is-rounded is-medium is-fullwidth is-load-more"
                        onMouseDown={() => {
                          this.setState({
                            educationPostsToShow:
                              this.state.educationPostsToShow + 9,
                            showingMore: true,
                          })
                        }}
                      >
                        Ladda mer FD Akademi
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "education-post" } } }
    ) {
      totalCount
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
            english
            image {
              childImageSharp {
                fluid(maxWidth: 697, quality: 85) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date(formatString: "YYYY-MM-DD")
            sponsored
          }
        }
      }
    }
  }
`
