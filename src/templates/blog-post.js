import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  sponsored,
  image,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  

  return (
    <React.Fragment>
      {helmet || ''}
      {image != null ? (
      <div className="is-featured-post">
        <div className="container-fluid">
          <figure className="image is-gradient is-16by9 mx-0 mt-0 mb-2">
            <img src={image.childImageSharp.fluid.src} alt={title} />
          </figure>
        </div>
        <section className="section">
          <div className="container content">
            <div className="columns is-centered">
              <div className="column is-10 is-feature">
                <div className="columns is-centered is-desktop">
                  <div className="column is-10-desktop is-12-tablet">
                    <h5 className="is-size-6 mb-2 has-text-grey">
                      <time dateTime={date}>{date}</time>
                      {sponsored === true &&
                        <span> &bull; UPPDRAGSARTIKEL</span>
                      }
                    </h5>
                    <h1 className="title is-size-3 mt-0">
                      {title}
                    </h1>
                    <PostContent content={content} />
                    <hr />
                    <p><strong>Tjänsten Fonder Direkt produceras av Nyhetsbyrån Direkts fondredaktion, som är frikopplad från Direkts övriga redaktion. Materialet kan vara finansierat och framtaget efter överenskommelse med extern part, vilket i förekommande fall markeras med "Uppdragsartikel" vid rubriken.</strong></p>
                    <hr />
                    {tags && tags.length ? (
                      <React.Fragment>
                        <h4>TAGGAR</h4>
                        <div className="tags">
                          {tags.map(tag => (
                            <Link key={tag + `tag`} to={`/taggar/${kebabCase(tag)}/`} className="tag is-medium is-link">{tag}</Link>
                          ))}
                        </div>
                      </React.Fragment>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ) : (
      <section className="section">
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-8">            
            <h5 className="is-size-6 mb-2 has-text-grey">
              <time dateTime={date}>{date}</time>
              {sponsored === true &&
                <span> &bull; UPPDRAGSARTIKEL</span>
              }
            </h5>
            <h1 className="title is-size-3 mt-0">
              {title}
            </h1>
            <PostContent content={content} />
            <hr />
            <p><strong>Tjänsten Fonder Direkt produceras av Nyhetsbyrån Direkts fondredaktion, som är frikopplad från Direkts övriga redaktion. Materialet kan vara finansierat och framtaget efter överenskommelse med extern part, vilket i förekommande fall markeras med "Uppdragsartikel" vid rubriken.</strong></p>
            <hr />
            {tags && tags.length ? (
              <React.Fragment>
                <h4>TAGGAR</h4>
                <div className="tags">
                  {tags.map(tag => (
                    <Link key={tag + `tag`} to={`/taggar/${kebabCase(tag)}/`} className="tag is-medium is-link">{tag}</Link>
                  ))}
                </div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </div>
    </section>
      )
    }
    </React.Fragment>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  sponsored: PropTypes.bool,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet>
            <title>{`${post.frontmatter.title} | Fonder Direkt`}</title>
            <meta name="description" content={`${post.excerpt}`} />
            <meta name="keywords" content={`${post.frontmatter.tags}`} />
            <meta property="og:title" content={`${post.frontmatter.title}`} />
            <meta property="og:description" content={`${post.excerpt}`} />
            <meta property="og:url" content={`https://fonderdirekt.se${post.fields.slug}`} />
            <meta property="og:type" content="article" />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        sponsored={post.frontmatter.sponsored}
        image={post.frontmatter.image}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      html
      excerpt(pruneLength: 280)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        sponsored
        image {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
