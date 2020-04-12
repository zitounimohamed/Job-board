import React from 'react' ; 
import { Switch,Route,BrowserRouter } from 'react-router-dom';

import loginEm from './loginEm'
import home from './home';
import singlejob from './singlejob';
import contact from './contact';
import Listjob from './listjob'
import { Provider } from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import registerEm from './registerEm';
import cv from './cv';
import test from './test';
const jwtToken = localStorage.getItem('JWT_TOKEN');


const Main= () => (
  <Provider store={createStore(reducers,{
    auth : {
        token : jwtToken,
        isAuthenticated: jwtToken ? true : false
    }

}, applyMiddleware(ReduxThunk))}>>
    <BrowserRouter>
    <Switch>
        
        <Route exact path ='/' component={home}></Route>
        <Route exact path ='/home' component={home}></Route>
        <Route path='/registerEm' component={registerEm}></Route>
        <Route path='/loginEm' component={loginEm}></Route>
        <Route path="/singlejob" component={singlejob}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path='/listjob' component={Listjob}></Route>
        <Route path ='/cv' component={cv}></Route>
        <Route paht ='/test' component={test}></Route>
      </Switch>
      </BrowserRouter>
      </Provider>
)

export default Main; 