import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../JS/NavBar';

class Navbar extends React.Component {
  render() {
    return (
        <nav className='navbar is-fixed-top is-danger'>
          <div className="navbar-brand">
            <a className="navbar-item" target='_blank' href="https://etaoghene.com">
              <img src="../../logowhite.svg" alt='Brand Logo' width="112" height="28"></img>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-start'>
              <NavLink to="/" className="navabr-item has-text-white" >Home</NavLink>
            </div>
            <div className='navbar-end'>
              <div className='buttons'>
                <Link to={`/checked`} className="button is-primary is-light" ><i className='fas fa-check'></i> Checked List</Link>
                <Link to={`/add`} className="button is-primary is-dark" ><i className='fas fa-plus'></i> Add to List</Link>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar