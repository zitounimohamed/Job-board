import React, { Component } from 'react';
import * as actions from '../../actions/index'
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  reduxForm} from 'redux-form';
import Axios from 'axios';
import setAuthToken from '../../utils/Authorization';


class Profilepage extends Component {
    constructor(props){
        super(props);
        this.state={
            profile : ''
        }
    }
    async componentDidMount(){
        const t = this.props.token
        console.log("token",t);
        
         await Axios.get('http://localhost:5000/users/secretS',setAuthToken(t))
        .then((response)=>{
            if(response.status===200 && response!= null )
        {
          this.setState({profile : response.data})
        }
        })
        
    }


    render() {
        console.log("profile :",this.state.profile);
        return (
            <div class="wrapper" >
            <div class="left">
                <img src="https://i.ibb.co/4jJRYgX/laptop-user-1-1179329.png" alt="user" width="100"/>
                <h4>{this.state.profile.nom}</h4>
                 <p>Administrateur</p>
            </div>
            <div class="right mr-5">
                <div class="info">
                    <h3>Information</h3>
                    <div class="info_data">
                         <div class="data pr-5">
                            <h4>Email</h4>
                            <p className='pr-5'>{this.state.profile.email}</p>
                         </div>
                         
                    </div>
                </div>
              
              
              
                <div class="social_media">
                    <ul>
                      <li><a href=""><i class="fa fa-facebook-f pt-3"></i></a></li>
                      <li><a href=""><i class="fa fa-twitter  pt-3"></i></a></li>
                      <li><a href=""><i class="fa fa-instagram  pt-3"></i></a></li>
                  </ul>
              </div>
            </div>
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
            reduxForm({form : 'profile'}))(Profilepage)