import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  reduxForm} from 'redux-form';
import * as actions from '../../actions';
import Googlelogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'

import './loginEm.css';



	

class SignInForm extends Component {
	constructor(props) {	
			super(props);
			this.state={
				email : null ,
				password : null  }

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this)
		this.responseGoogle = this.responseGoogle.bind(this);
		this.responseFacebook = this.responseFacebook.bind(this);
	  }
	
	  handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    handleSubmit = async (event)=>{
        event.preventDefault();

      
       const data ={
        email : this.state.email ,
        password : this.state.password , 
       }

       console.log("data",data);
       await this.props.signin(data);
          
           if (!this.props.errorMessage) {
            this.props.history.push('/home');}

            
    }
	
	  async responseGoogle(res) {
		await this.props.oauthGoogle(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/home');
		}
	  }
	
	  async responseFacebook(res) {
		await this.props.oauthFacebook(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/home');
		}
	  }
	
    
    render() {

        return (
			<div>
        
			<div class="container ">
				<div className='row'>
	
				<div className='col'>
						<form onSubmit={this.handleSubmit} className="p-5 p-md-5 border rounded test">
						<h2 class="form-title">Connexion :</h2><hr/>
	
							<div class=' pt-5'>
								<label for="exampleFormControlFile1" className='lab'>Email :*</label>
								<input class="form-control" type="text" placeholder="Default input" name="email" id="email" onChange={this.handleInputChange}/>
							</div>
							  
							<div class='pt-3'>
								<label for="exampleFormControlFile1" className='lab'>Mot de passe :*</label>
								<input class="form-control" type="password" placeholder="Default input" name="password" id="password" onChange={this.handleInputChange}/>
							</div>
							<div class='row pt-5'>
                        <button type='submit' class='btn btn-primary btn-lg ' id='but' >Se Connecter</button>
                        </div>
						<div className='row'>
							<div className='col'>
							<a href='/'>Mot de passe oublié ? </a>
							</div>
							<div className='col'>
							<p>Ou <a href='/registerEm' className='pl-3'>Rejoignez-nous </a></p>
							</div>
						</div>

						</form>
					   
					   </div>
					   <div className='col p-5 p-md-5 border rounded test '>
					   <figure className='fig pt-5'>
						   <h4 className='pt-5'> Se connecter via les réseaux sociaux</h4><br/><br/>
						   <div className='pt-3 '>
					   <FacebookLogin
							appId="200823678007159"
							autoLoad={false}
							textButton="Sign in with Facebook"
							fields="name,email,picture"
							callback={this.responseFacebook}
							cssClass="btn btn-lg btn-outline-primary"
						/></div>
						<Googlelogin
							clientId="1020396711366-kmijavhtfkivou1n6sh8tihggi14n93h.apps.googleusercontent.com"
							buttonText="Sign in with Google"
							onSuccess={this.responseGoogle}
							onFailure={this.responseGoogle}
							cssClass="btn btn-lg btn-outline-danger"
						/>
							
							</figure>
	
					   </div>
					   </div>
					   
					   </div>
				   </div>     
		   
	

	
        );
	}
	
}
function mapStateToProps(state) {
	return{
		errorMessage: state.auth.errorMessage,
		isAuth : state.auth.isAuthenticated
	}	
}

export default compose(
    connect(mapStateToProps,actions),
            reduxForm({form : 'signin'}))(SignInForm)