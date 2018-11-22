import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const VideoPostTemplate = ({
  content,
  contentComponent,
  tags,
  title,
  date,
  helmet,
  program,
  sponsored,
  videoId,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      {helmet || ''}
      <div className="is-video">
        <div className="container">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe title={videoId} className="embed-responsive-item" src={"https://www.youtube.com/embed/"+videoId+"?rel=0"} allowFullScreen></iframe>
            </div>
        </div>
      </div>
      <section className="section">
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
    </div>
  )
}

VideoPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  videoId: PropTypes.string,
  Program:  PropTypes.string,
  sponsored: PropTypes.bool,
}

const VideoPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VideoPostTemplate
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
        videoId={post.frontmatter.videoId}
        program={post.frontmatter.program}
        sponsored={post.frontmatter.sponsored}
      />
    </Layout>
  )
}

VideoPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default VideoPost

export const pageQuery = graphql`
  query VideoPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 280)
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
        tags
        program
        videoId
        sponsored
      }
    }
  }
`
