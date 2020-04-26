import React from 'react' ; 
import { Switch,Route,BrowserRouter } from 'react-router-dom';

import loginEm from './employee/loginEm'
import home from './home';
import singlejob from './singlejob';
import contact from './contact';
import Listjob from './listjob'
import { Provider } from 'react-redux';
import {createStore,applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import registerEm from './employee/registerEm';
import cv from './employee/cv';
import profileEm from './employee/profileEm';
import listcv from './employee/listcv';
import cvs from '../views/cvs';
import authGard from './HOCs/authGuard'
import Axios from 'axios';
import store from './store';



const Main= () => (
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
        
        <Route exact path ='/' component={loginEm}></Route>
        <Route exact path ='/home' component={home}></Route>
        <Route path='/registerEm' component={registerEm}></Route>
        <Route path='/loginEm' component={loginEm}></Route>
        <Route path="/singlejob" component={singlejob}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path='/listjob' component={Listjob}></Route>
        <Route path ='/cv' component={authGard(cv)}></Route>
        <Route path ='/profileEm' component={profileEm}></Route>
        <Route path='/cvs' component={authGard(cvs)}></Route>
      </Switch>
      </BrowserRouter>
      </Provider>
)

export default Main; 