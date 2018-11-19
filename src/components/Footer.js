import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { StaticQuery, graphql } from "gatsby"

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="columns">
                <div className="column is-3">
                    <figure className="image">
                        <img src={logo} alt="Fonder Direkt" style={{ width: '120px' }} />
                    </figure>
                </div>
                <div className="column is-6">
                    <h4 className="has-text-white is-size-5">SENASTE NYTT</h4>
                </div>
                <div className="column is-3">
                    <h4 className="has-text-white is-size-5">KONTAKT</h4>
                </div>
            </div>
            {/*
            <div className="content has-text-centered ">
                <p>Fonder Direkt av <a href="http://www.direkt.se">Nyhetsbyrån Direkt</a></p>
            </div>
            */}
        </div>
    </footer>
  )

  export default Footer
