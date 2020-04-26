import React, { Component } from 'react';
import Main from './Components/main';
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import {setCurrentUser} from './actions';
import jwt_decode from "jwt-decode";
import setAuthToken from './utils/Authorization'
import store from './Components/store'

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component{
 /* async componentDidMount() {
   await this.props.checkAuth();
  }*/
  render() {
    
  return (
    <div className="demo-big-content">
        <Navbar></Navbar>
        
        
        
        
          <div className="page-content" />

            <Main>
            </Main>
          
          <Footer></Footer>

          </div>
  );
}}

export default App;
