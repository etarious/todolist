import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import nav from '../../JS/NavBar';

class Navbar extends React.Component {
  render() {
    // document.addEventListener('click', () => {
    //   console.log("Working");
    //     // Get all "navbar-burger" elements
    //     const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    //     // console.log($navbarBurgers.length);
    //     // Add a click event on each of them
    //     $navbarBurgers.forEach( el => {
    //       el.addEventListener('click', () => {
    //         console.log("Working");
      
    //         // Get the target from the "data-target" attribute
    //         const target = el.dataset.target;
    //         const $target = document.getElementById(target);
      
    //         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    //         el.classList.toggle('is-active');
    //         $target.classList.toggle('is-active');
      
    //       });
    //     });
      
    //   });
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
                <Link to={`/add`} className="button is-primary is-dark" ><i className='fas fa-plus'></i> Add Task</Link>
              </div>
            </div>
          </div>
        </nav>
    )
  }
}

export default Navbar