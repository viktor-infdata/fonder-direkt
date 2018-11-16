import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Fonder Direkt"
    >
      <html lang="se" />
      <meta name="description" content="Fonder Direkt" />
      <meta name="copyright" content="Fonder Direkt är en del av Aktiebolaget Nyhetsbyrån Direkt" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
