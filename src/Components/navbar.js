import React, { Component } from 'react';
import '../assets/css/agency.min.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import { NavLink, NavItem } from 'reactstrap';
import {Redirect} from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    this.props.signOut();
    this.props.history.push('/loginEm');

  }
    render() {
      console.log("isAuth: " + this.props.isAuth);
    const isAuth = this.props.isAuth;

    // Checking if signed in or not and reacting as expected
    const signInOrSignOut = !isAuth ? (
    <li className="nav-item">
    <a className="nav-link js-scroll-trigger" href="/loginEm" key="login">connexion</a>
  </li>) 
  : (
    <li className="nav-item">
            <a className="nav-link js-scroll-trigger" onClick={this.props.signOut}  href="/loginEm" key="logout">Déconnexion</a>
          </li>
  ) ;

        return(
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
          <a className="nav-link js-scroll-trigger" href="/jobs">offres des emplois </a>
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
        {signInOrSignOut}
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

export default connect(mapStateToProps,actions) (Navbar);