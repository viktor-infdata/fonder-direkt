import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-primary">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" activeClassName='is-active'>
        {/*
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>
          */}
          Fonder Direkt
        </Link>
        
      </div>
      <div className="navbar-start">

      </div>
      <div className="navbar-end">
        <Link className="navbar-item" activeClassName='is-active' to="/om-fonder-direkt">
          Om Fonder Direkt
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
