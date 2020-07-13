import React from 'react' ; 
import { Switch,Route,BrowserRouter } from 'react-router-dom';
import loginEm from './employee/loginEm'
import home from './home';
import singlejob from './society/singlejob';
import contact from './contact';
import Listjob from './society/listjob'
import registerEm from './employee/registerEm';
import Cv from './employee/cv';
import profileEm from './employee/profileEm';
import cvs from '../views/cvs';
// Gestion de role
import isClient from './HOCs/isClient'
import isAdmin from './HOCs/isAdmin'
import NotClient from './HOCs/NotClient'


import register from './society/register';
import postJob from './society/postJob';
import Recherche from './society/Recherche';
import profile from './society/profile'
import jobs from '../views/society/jobs'
import formations from '../views/society/formations'
import ProfilepageEm from './employee/profilepageEm';
import test from './test'
import Modifier from './society/modifyjob'
import profilepage from './society/profilepage';
import services from './services'
import listFormation from './formations/listFormation'

// Admin pages
import Admin from './admin/admin'
import offres from './admin/offres';
import allcv from './admin/allcv';
import demandes from './admin/demandes'
import formationAdmin from './admin/formationAdmin'
import ajoutadmin from './admin/ajoutadmin';
import singleFormation from './formations/singleFormation';
import ajouterForma from './formations/ajouterForma';
import ajoutFormanAdmin from './admin/ajoutFormanAdmin';
import listJSearch from './employee/listJSearch';
import about from './about';
import Demandes from './society/Demandes';

const Main= () => (
    <BrowserRouter>
    <Switch>
        
        <Route exact path ='/' component={home}></Route>
        <Route exact path ='/home' component={home}></Route>
        <Route path='/registerEm' component={registerEm}></Route>
        <Route path='/loginEm' component={loginEm}></Route>
        <Route path="/singlepage/:id" component={(singlejob)}></Route>
        <Route path="/contact" component={contact}></Route>
        <Route path='/listjob' component={Listjob}></Route>
        <Route path ='/cv' component={isClient(Cv)}></Route>
        <Route path ='/profileEm' roles={["employe"]} component={isClient(profileEm)}></Route>
        <Route path='/cvs' roles={["employe"]}component={isClient(cvs)}></Route>
        <Route path='/register' component={register}></Route>
        <Route path='/postjob' roles={["societé"]} component={NotClient(postJob)}></Route>
        <Route path='/recherche' roles={["societé"]} component={NotClient(Recherche)}></Route>
        <Route path='/profile' roles={["societé"]} component={NotClient(profile)}></Route>
        <Route path='/jobs/' component={(jobs)}></Route>
        <Route path='/profilepage' component={isClient(ProfilepageEm)}></Route>
        <Route path='/test'  component={test}></Route>
        <Route path='/modifypage/:id' component={NotClient(Modifier)}></Route>
        <Route path='/profilesociety' component={NotClient(profilepage)}></Route>
        <Route path='/service' component={services}></Route>
        <Route path='/admin' component={isAdmin(Admin)}/>
        <Route path='/offres' component={isAdmin(offres)}/>
        <Route path='/allcv' component={isAdmin(allcv)}/>
        <Route path='/demandes' component={isAdmin(demandes)}/>
        <Route path='/formations' component={isAdmin(listFormation)}/>
        <Route path='/formationAdmin' component={isAdmin(formationAdmin)}/>
        <Route path='/ajoutadmin' component={isAdmin(ajoutadmin)} />
        <Route path='/ajoutadminforma' component={isAdmin(ajoutFormanAdmin)}/>
        <Route path='/allformations' component={formations}/>
        <Route path='/singleFormation/:id' component={singleFormation}/>
        <Route path='/ajoutforma' component={ajouterForma}/>
        <Route path='/listJSearch/:titre/:lieu/:type' component={listJSearch}/>
        <Route path="/about" component={about}/>
        <Route path='/demandees' component={NotClient(Demandes)}/>

        

      </Switch>
      </BrowserRouter>
)

export default Main; 