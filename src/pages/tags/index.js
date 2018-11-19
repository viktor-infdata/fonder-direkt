import React from 'react'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Layout>
    <section className="section">
      <Helmet title={`Taggar | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-8 is-offset-2"
            style={{ marginBottom: '6rem' }}
          >
            <h1 className="title is-size-3">TAGGAR</h1>
            <div className="field is-grouped is-grouped-multiline">
              {group.map(tag => (
                <div className="control" key={tag.fieldValue}>
                  <div className="tags has-addons">
                    <Link className="tag is-medium is-link" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                      {tag.fieldValue}
                    </Link>
                    <span className="tag is-medium">{tag.totalCount}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default TagsPage

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
