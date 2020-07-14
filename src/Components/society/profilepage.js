import React, { Component } from 'react';
import * as actions from '../../actions/index'
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  reduxForm} from 'redux-form';
import Axios from 'axios';
import setAuthToken from '../../utils/Authorization';


class profilePage extends Component {
    constructor(props){
        super(props);
        this.state={
            profile : ''
        }
    }
    async componentDidMount(){
const id= localStorage.getItem('id')

        
         await Axios.get(`http://localhost:5000/users/profileC/${id}`)
        .then((response)=>{
            if(response.status===200 && response!= null )
        {
          this.setState({profile : response.data.local})
        }
                
        })
        
    }


    render() {
        console.log("profile :",this.state.profile);
        return (
            <div class="container emp-profile" style={{paddingTop : 100 , paddingBottom : 50}}>
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                    
                                    </h5>
                                    <h6>
                                       
                                    </h6>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Blog</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-4">
                        
                    </div>
                    <div class="col-md-8 pt-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nom et prénom</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.profile.name }</p>
                                            </div>
                                        </div>
                                        
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.profile.email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nom de societé</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.profile.nomEn}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Telephone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{this.state.profile.tel}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Titre</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Web Developer and Designer</p>
                                            </div>
                                        </div>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Expérience</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Hourly Rate</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nombre des projets</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>230</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>English Level</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Expert</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Availability</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label>Your Bio</label><br/>
                                        <p>Your detail description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>           
        </div>
        );
    }
}
function mapStateToProps(state) {
	return {
	  errorMessage: state.auth.errorMessage,
      isAuth : state.auth.isAuthenticated,
      token: state.auth.token,

	}
  }

export default compose(
    connect(mapStateToProps,actions),
            reduxForm({form : 'profile'}))(profilePage)