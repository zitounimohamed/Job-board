import React, { Component } from 'react';
import '../assets/css/agency.min.css'
import { connect } from 'react-redux';
import * as actions from '../actions'
import {  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
   } from 'reactstrap';
import logo from '../assets/img/logo.png'
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
    
    
           <UncontrolledDropdown nav inNavbar>
           <DropdownToggle nav caret>
             Mon Compte
           </DropdownToggle>
           <DropdownMenu>
             <DropdownItem>
             </DropdownItem>
             <DropdownItem>
               Offres d'emploi
             </DropdownItem>
             <DropdownItem divider />
             <DropdownItem className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/loginEm" onClick={this.signOut} key="logout">Deconnexion</a>
             </DropdownItem>
           </DropdownMenu>
         </UncontrolledDropdown>
  ) ;

        return(
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/home"><img  className= 'logo'src={logo} alt=''></img></a>
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
          <a className="nav-link js-scroll-trigger" href="/formations">Formations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link js-scroll-trigger" href="/contact">Contacter Nous</a>
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