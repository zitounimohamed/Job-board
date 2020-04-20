import React, { Component } from 'react';
import '../assets/css/agency.min.css'
import { connect } from 'react-redux';
import * as actions from '../actions'

class navbar extends Component {
    render() {
     
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="/home">Start</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav text-uppercase ml-auto">
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/listjob">offres des emplois </a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#portfolio">Emploi par ville</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#about">Formations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="#team">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/contact">Contact</a>
        </li>
        { !this.props.isAuth ?
        [<li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/loginEm">Connexion</a>
        </li>,
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/registerEm">Inscription</a>
        </li>] : null}
        { this.props.isAuth ?

        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/">Déconnexion</a>
        </li>
        : null}
      </ul>
      </div>
    </div>
  </nav>
        );
    }
}



function mapStateToProps(state){
  return{
    isAuth : state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps,actions) (navbar);