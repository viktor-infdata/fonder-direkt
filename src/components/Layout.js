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
      <meta name="description" content="Fonder Direkt är nordens ledande webbplats om fonder som produceras av Nyhetsbyrån Direkts fondredaktion i syfte att bredda kunskapen om fonder och öka genomlysningen av denna marknad." />
      <meta name="copyright" content="Fonder Direkt är en del av Aktiebolaget Nyhetsbyrån Direkt" />
      <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png"  />
      <link rel="mask-icon" href="safari-pinned-tab.svg" color="#037184" />
      <link rel="shortcut icon" href="favicon.ico" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content="browserconfig.xml" />
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
