import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  sponsored,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <h5 className="is-size-6 mb-2 has-text-grey">
              {date}
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
              <div>
                <h4>TAGGAR</h4>
                <div className="tags">
                  {tags.map(tag => (
                    <Link key={tag + `tag`} to={`/tags/${kebabCase(tag)}/`} className="tag is-medium is-link">{tag}</Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  sponsored: PropTypes.bool,
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
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        sponsored={post.frontmatter.sponsored}
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
      html
      excerpt(pruneLength: 280)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        sponsored
      }
    }
  }
`
