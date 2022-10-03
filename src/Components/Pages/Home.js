import React from "react";
import { Link } from "react-router-dom";

import logowhite from '../../logowhite.svg'

class Home extends React.Component {
    render () {
        return (
            <header className="header">
                <img src={ logowhite } alt="Logo" className="appLogo animate__animated animate__pulse animate__infinite animate__slow"></img>
                <h1 className="title is-1 is-spaced has-text-danger">Make Your Day Count</h1>
                <p className="subtitle is-5 has-text-white">Have a list of your daily activity and get your day Achievement-Oriented</p>
                <Link to={ `list` } className="button is-danger is-light" >Get Started</Link>
            </header>
        )
    }
}

export default Home;