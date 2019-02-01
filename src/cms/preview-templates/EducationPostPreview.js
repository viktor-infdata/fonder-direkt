import React from 'react'
import PropTypes from 'prop-types'
import { EducationPostTemplate } from '../../templates/education-post'

const EducationPostPreview = ({ entry, widgetFor }) => (
  <EducationPostTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EducationPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EducationPostPreview
