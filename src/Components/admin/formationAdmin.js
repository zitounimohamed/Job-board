import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import './admin.css'
class offres extends Component {
    constructor(props){
        super(props);
        this.state = {
            formation: []
          }
    
 }
 delete(id){
    axios.delete(`http://localhost:5000/formations/${id}`)
    .then((response)=>{
      if(response.status===200 && response!= null)
      {
        console.log("done");
        
      }
    })
    
 }
 async componentDidMount(){
    
    
    await axios.get("http://localhost:5000/formations/formations")

     .then((response) => {
       if(response.status===200 && response!= null )
       {
         this.setState({formation : response.data})
       }
    })
}

    render() {
        return (
            <div id="wrapper">

            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            
            <div class="sidebar-brand d-flex align-items-center justify-content-center" >
                <div class="sidebar-brand-icon rotate-n-15">
                  <i class="ti-themify-favicon"></i>
                </div>
                <div class="sidebar-brand-text mx-3">administrateur </div>
              </div>
            
              <hr class="sidebar-divider my-0"/>
            
              <li class="nav-item active">
                <a class="nav-link" href="/home">
                <i class="fa fa-tachometer" aria-hidden="true"></i>
                 <span >  Home</span></a>
              </li>
            
              <hr class="sidebar-divider"/>
            
              <div class="sidebar-heading">
                Interface
              </div>
            
              <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fa fa-cogs" aria-hidden="true"></i>
                  <span>Emplois & Formations </span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="/offres">Visualiser tous les offres </a>
                    <a class="collapse-item" href="/formationAdmin">Visualiser tous les offres </a>
                  </div>
                </div>
              </li>
            
              <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fa fa-users" aria-hidden="true"></i>
                  <span>Gerer les cv</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="/allcv">Visualiser les cv</a>
                  
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link collapsed" href="/" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                  <i class="fa fa-fw fa-folder"></i>
                  <span>Les demandes</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                  <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="/demandes">Visualiser les demandes</a>
                  </div>
                </div>
              </li>
            
              <hr class="sidebar-divider"/>
            
              <div class="sidebar-heading">
                Addons
              </div>
            
              <li class="nav-item">
                <a class="nav-link" href="charts.html">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                  <span>Statistique</span></a>
              </li>
            
            </ul>
            
            <div id="content-wrapper" class="d-flex flex-column">
            
              <div id="content">
            
                <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            
                  <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                  </button>
                  <ul class="navbar-nav ml-auto">
            
                    <li class="nav-item dropdown no-arrow d-sm-none">
                      <a class="nav-link dropdown-toggle" href="/" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-search fa-fw"></i>
                      </a>
                    
                      <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                        <form class="form-inline mr-auto w-100 navbar-search">
                          <div class="input-group">
                            <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                              <button class="btn btn-primary" type="button">
                                <i class="fa fa-search fa-sm"></i>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </li>
            
                    <div class="topbar-divider d-none d-sm-block"></div>
            
                    <li class="nav-item dropdown no-arrow">
                      <a class="nav-link dropdown-toggle" href="/" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="mr-2 d-none d-lg-inline text-gray-600 small">Admin </span>
                        <img class="img-profile rounded-circle" src="https://i.ibb.co/4jJRYgX/laptop-user-1-1179329.png" />
                      </a>
              
                      <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a class="dropdown-item" href="/">
                          <i class="fa fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                        </a>
                        <a class="dropdown-item" href="/">
                          <i class="fa fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          Settings
                        </a>
                        <a class="dropdown-item" href="/">
                          <i class="fa fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                          Activity Log
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/" data-toggle="modal" data-target="#logoutModal">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav> 
                <div className="content content-margined container ">

    <div className="piece-header">
      <h3>Listes des offres d'emplois</h3>
      <div className='pt-3 pb-3'>
      <a className="btn btn-secondary" href='/ajoutadminforma'>Ajouter une formation</a>   
      </div>
      
    </div>
   

    <div className="piece-list">

      <table className="table">
        <thead>
          <tr>
            <th className='pl-5'>Visualiser</th>
            <th>Titre de formation</th>
            <th>Email</th>
            <th>Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.formation.map(formation => (<tr key={formation._id}>
            <td> <Link to ={`/singleformation/${formation._id}`}className= "py-2 mr-1"><i class="fa fa-arrow-circle-right pl-5" aria-hidden="true" style={{fontSize: 25}}></i></Link></td>
            <td>{formation.titre}</td>
            <td>{formation.email}</td>
            <td>{formation.type}</td>
            <td>
              {' '}
              
                    <button className="button" onClick={()=> this.delete(formation._id)} ><i class="fa fa-trash" aria-hidden="true"></i></button>
            </td>
          </tr>))}
        </tbody>
      </table>
           
          </div>
  </div>
                  </div>
                  </div>
                  </div>
        );
    }
}

export default offres;