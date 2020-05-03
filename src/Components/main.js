import React from 'react' ; 
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import loginEm from './employee/loginEm'
import home from './home';
import singlejob from './society/singlejob';
import contact from './contact';
import Listjob from './society/listjob'
import { Provider } from 'react-redux';
import registerEm from './employee/registerEm';
import cv from './employee/cv';
import profileEm from './employee/profileEm';
import cvs from '../views/cvs';
import authGard from './HOCs/authGuard'
import store from './store';
import register from './society/register';
import postJob from './society/postJob';
import Recherche from './society/Recherche';
import profile from './society/profile'
import jobs from '../views/society/jobs'
import Onejob from '../views/society/Onejob';



const Main= () => (
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
        
        <Route exact path ='/' component={home}></Route>
        <Route exact path ='/home' component={home}></Route>
        <Route path='/registerEm' component={registerEm}></Route>
        <Route path='/loginEm' component={loginEm}></Route>
        <Route path="/singlejob" component={singlejob}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path='/listjob' component={Listjob}></Route>
        <Route path ='/cv' component={authGard(cv)}></Route>
        <Route path ='/profileEm' component={profileEm}></Route>
        <Route path='/cvs' component={authGard(cvs)}></Route>
        <Route path='/register' component={register}></Route>
        <Route path='/postjob' component={postJob}></Route>
        <Route path='/recherche' component={Recherche}></Route>
        <Route path='/profile' component={profile}></Route>
        <Route path='/jobs' component={jobs}></Route>
        <Route path='/onejob' component={Onejob}></Route>
       
      </Switch>
      </BrowserRouter>
      </Provider>
)

export default Main; 