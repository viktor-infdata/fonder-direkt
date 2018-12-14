import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.scss'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet
      title="Fonder Direkt"
    >
      <html lang="se" />
      <meta name="description" content="Fonder Direkt är en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder som produceras av Nyhetsbyrån Direkts fondredaktion." />
      <meta name="copyright" content="Fonder Direkt är en del av Aktiebolaget Nyhetsbyrån Direkt" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"  />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#037184" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.fonderdirekt.se/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:title" content="Fonder Direkt" />
      <meta property="og:description" content="Fonder Direkt är en plattform där du kan hitta information, läsa nyheter och ta del av kommunikation om fonder som produceras av Nyhetsbyrån Direkts fondredaktion." />
      <meta property="og:url" content="https://www.fonderdirekt.se" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content="https://www.fonderdirekt.se/og-image.png" />
      <meta name="twitter:site" content="@fonder_direkt" />
    </Helmet>
    <div className="page">
      <div className="main">
        <Navbar />
        <React.Fragment>{children}</React.Fragment>
      </div>
      <Footer />
    </div>
  </React.Fragment>
)

export default TemplateWrapper
