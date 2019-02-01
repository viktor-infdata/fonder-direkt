import React from 'react'
import chunk from "lodash/chunk"
import * as PropTypes from "prop-types"
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
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
      this.setState({ educationPostsToShow: this.state.educationPostsToShow + 9 })
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
        <section className="hero is-light is-bold">
          <Helmet title="Utbildning | Fonder Direkt">
            <meta name="description" content="Senaste utbildningsmaterialet från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder." />
            <meta property="og:title" content="Utbildning | Fonder Direkt" />
            <meta property="og:url" content="https://fonderdirekt.se/utbildning/" />
            <meta property="og:description" content="Senaste utbildningsmaterialet från Fonder Direkt, en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder." />
          </Helmet>
          <div className="hero-body">
          <div className="container">
            <div className="columns is-multiline">
              {chunk(posts.slice(0, this.state.educationPostsToShow), 9).map((chunk, i) => (
                  <React.Fragment
                    key={`chunk-${i}`}
                  >
                    {chunk.map(node => (
                      <div className="column is-one-third-desktop is-half-tablet" key={node.id}>
                        <div className="card has-equal-height">
                          <div className="card-image">
                            {node.frontmatter.videoId != null ? (
                              <div className="embed-responsive embed-responsive-16by9">
                                <iframe title={node.frontmatter.videoId} className="embed-responsive-item" src={"https://www.youtube.com/embed/"+node.frontmatter.videoId+"?rel=0"} allowFullScreen></iframe>
                              </div>
                              ) : (
                                <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} />
                              )
                            }
                          </div>
                          <div className="card-content">
                            <div className="content">
                              <h5 className="is-size-7 mb-0">
                                <small className="has-text-grey"><time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time></small>
                                {node.frontmatter.sponsored === true &&
                                  <span className="has-text-grey"> &bull; <small className="has-text-grey">UPPDRAGSARTIKEL</small></span>
                                }
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
                            <Link className="card-footer-item button is-dark is-fullwidth is-feature-button" to={node.fields.slug}>
                              Gå till utbildning
                            </Link>
                          </footer>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
              <div className="columns is-centered">
                <div className="column is-8">
                  {!this.state.showingMore && (
                    <button className="button is-rounded is-medium is-fullwidth is-load-more"
                      onMouseDown={() => {
                      this.setState({
                        educationPostsToShow: this.state.educationPostsToShow + 9,
                        showingMore: true,
                        })
                      }}
                    >
                  Ladda mer utbildningsmaterial
                  </button>
                  )}
                </div>
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
      limit: 1000,
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "education-post" }}}
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
            image {
              childImageSharp {
                fluid(maxWidth: 697, quality: 85) {
                  ...GatsbyImageSharpFluid_withWebp
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
