import React, { Component } from 'react';
import Main from './Components/main';
import Navbar from './Components/navbar'
import Footer from './Components/footer'



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
