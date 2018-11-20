import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div>
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title mb-5">
            Oops verkar som att du har hittat en sida som inte finns&hellip;
          </h1>
          <h2 class="subtitle">
            Men inga problem, gå gärna till <Link to="/">startsidan</Link> och hitta dina nyheter :-)
          </h2>
        </div>
      </div>
    </section>
    </div>
  </Layout>
)

export default NotFoundPage
