import React from 'react'
import chunk from 'lodash/chunk'
import * as PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../../components/Layout'

if (typeof window !== 'undefined') {
  window.videoPostsToShow = 10
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
    let videoPostsToShow = 10
    if (typeof window !== 'undefined') {
      videoPostsToShow = window.videoPostsToShow
    }

    this.state = {
      showingMore: videoPostsToShow > 10,
      videoPostsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 400) {
      this.setState({ videoPostsToShow: this.state.videoPostsToShow + 10 })
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
    window.videoPostsToShow = this.state.videoPostsToShow
  }

  render() {
    let { allMarkdownRemark } = this.props.data
    const posts = allMarkdownRemark.edges.map(e => e.node)

    return (
      <Layout>
        <section className="section">
          <Helmet title="Video | Fonder Direkt">
            <meta
              name="description"
              content="Senaste videoklippen från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder."
            />
            <meta property="og:title" content="Video | Fonder Direkt" />
            <meta property="og:url" content="https://fonderdirekt.se/video/" />
            <meta
              property="og:description"
              content="Senaste videoklippen från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder."
            />
          </Helmet>
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-8">
                <React.Fragment>
                  {chunk(posts.slice(0, this.state.videoPostsToShow), 10).map(
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
                                {node.frontmatter.date}
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
                  {allMarkdownRemark.totalCount > 10 && (
                    <React.Fragment>
                      {!this.state.showingMore && (
                        <button
                          className="button is-rounded is-medium is-fullwidth is-load-more"
                          onMouseDown={() => {
                            this.setState({
                              videoPostsToShow:
                                this.state.videoPostsToShow + 10,
                              showingMore: true,
                            })
                          }}
                        >
                          Ladda fler videoklipp
                        </button>
                      )}
                    </React.Fragment>
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
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "video-post" } } }
    ) {
      totalCount
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
          }
        }
      }
    }
  }
`
