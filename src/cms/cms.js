import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import VideoPostPreview from './preview-templates/VideoPostPreview'
import EducationPostPreview from './preview-templates/EducationPostPreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('video', VideoPostPreview)
CMS.registerPreviewTemplate('education', EducationPostPreview)
CMS.registerEditorComponent({
  id: 'youtube',
  label: 'Youtube',
  fields: [
    {
      name: 'id',
      label: 'YouTube Video ID',
      widget: 'string',
    },
  ],
  pattern: /^<div class="embed-responsive embed-responsive-16by9 mb-3"><iframe class="embed-responsive-item" src="https:\/\/www.youtube.com\/embed\/(.*)?rel=0" allowfullscreen><\/iframe><\/div>/,
  fromBlock: function(match) {
    return {
      id: match[1],
    }
  },
  toBlock: function(obj) {
    return (
      '<div class="embed-responsive embed-responsive-16by9 mb-3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' +
      obj.id +
      '?rel=0" allowfullscreen></iframe></div>'
    )
  },
  toPreview: function(obj) {
    return (
      '<div class="embed-responsive embed-responsive-16by9 mb-3"><iframe class="embed-responsive-item" src="https://www.youtube.com/embed/' +
      obj.id +
      '?rel=0" allowfullscreen></iframe></div>'
    )
  },
})
CMS.registerEditorComponent({
  id: 'caption',
  label: 'Caption',
  fields: [
    {
      name: 'caption',
      label: 'Image Caption',
      widget: 'string',
    },
  ],
  pattern: /^<span class="image-caption">(.*)<\/span>/,
  fromBlock: function(match) {
    return {
      caption: match[1],
    }
  },
  toBlock: function(obj) {
    return '<span class="image-caption">' + obj.caption + '</span>'
  },
  toPreview: function(obj) {
    return '<span class="image-caption">' + obj.caption + '</span>'
  },
})
