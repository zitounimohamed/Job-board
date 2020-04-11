import React from 'react';
import {Layout,Content} from 'react-mdl' ;
import Main from './Components/main';
import Navbar from './Components/navbar'
import Footer from './Components/footer'
function App() {
  return (
    <div className="demo-big-content">
        <Navbar></Navbar>
        
        
        
        <Content>
          <div className="page-content" />

            <Main>
            </Main>
            <Footer></Footer>
          </Content>
          </div>
  );
}

export default App;
