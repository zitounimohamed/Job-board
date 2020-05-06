import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import {  reduxForm} from 'redux-form';
import * as actions from '../../actions';
import Googlelogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'

import './loginEm.css';

	

class SignUpForm extends Component {
	constructor(props) {	
		super(props);
		this.state={
			username : null,
			email : null ,
			password : null,
			repeat_password : null ,
			nom : null,
			tel : null ,
			location : null
		}

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
	username : this.state.username,
	password : this.state.password , 
	repeat_password : this.state.repeat_password ,
	nom : this.state.nom,
	tel : this.state.tel ,
	location : this.state.location
   }

   console.log("data",data);
   await this.props.signup(data);
	  
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
						<h2 class="form-title">Créer votre espace employeur :</h2><hr/>

                        <div class='row pt-5'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Username :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="username" id="email" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Email :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="email" id="email" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        <div class='row pt-3'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Nom & prénom :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="nom" id="nom" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Mot de passe :*</label>
                            <input class="form-control" type="password" placeholder="Default input" name="password" id="password" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        <div class='row pt-3'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Confirmation mot de passe:*</label>
                            <input class="form-control" type="password" placeholder="Default input" name="repeat_password" id="repeat_password" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col '>
                            <label for="exampleFormControlFile1" className='lab'>Telephone :*</label>
                            <input class="form-control" type="tel" placeholder="Default input" name="tel" id="tel" onChange={this.handleInputChange}/>
                        </div>
                        </div>
						<div className='pb-5 pt-3'>
						<label for="exampleFormControlFile1">Gouvernorat</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="location" onChange={this.handleInputChange}>
                            <option selected>Choisir...</option>
                            <option value="Ariana">Ariana</option>
                            <option value="Béja">Béja</option>
                            <option value="Ben Arous">Ben Arous</option>
							<option value="Bizerte">Bizerte</option>
                            <option value="Gabès">Gabès</option>
                            <option value="Gafsa">Gafsa</option>
							<option value="Jendouba">Jendouba</option>
                            <option value="Kairouan">Kairouan</option>
                            <option value="Kasserine">Kasserine</option>
							<option value="Kébili">Kébili</option>
                            <option value="Le Kef">Le Kef</option>
                            <option value="Mahdia">Mahdia</option>
							<option value="La Manouba">La Manouba</option>
                            <option value="Médenine">Médenine</option>
                            <option value="Monastir">Monastir</option>
							<option value="Nabeul">Nabeul</option>
                            <option value="Sfax">Sfax</option>
                            <option value="Sidi Bouzid">Sidi Bouzid</option>
							<option value="Siliana">Siliana</option>
                            <option value="Sousse">Sousse</option>
                            <option value="Tataouine">Tataouine</option>
							<option value="Tozeur">Tozeur</option>
                            <option value="Tunis">Tunis</option>
                            <option value="Zaghouan">Zaghouan</option>
                        </select>
						</div>
                        
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked/>
                            <label class="form-check-label" for="exampleCheck1">J'accepte les conditions d'utilisation *</label>
                        </div>
						
						<div class='row pt-5'>
                        <button type='submit' class='btn btn-primary btn-lg ' id='but' >S'inscrire</button>
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
	return {
	  errorMessage: state.auth.errorMessage,
	  isAuth : state.auth.isAuthenticated

	}
  }

export default compose(
    connect(mapStateToProps,actions),
            reduxForm({form : 'signup'}))(SignUpForm)