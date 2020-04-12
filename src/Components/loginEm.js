import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import { Field, reduxForm} from 'redux-form';
import CustumInput from './CustumInput'
import * as actions from '../actions';
import Googlelogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login'

import './loginEm.css';
import Background from './images/hero_2.jpg' ;

const mystyles ={
    backgroundImage: `url(${Background})`,
    height : '120vh',
	backgroundSize : 'cover'}
	

class SignInForm extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
		this.responseFacebook = this.responseFacebook.bind(this);
	  }
	
	  async onSubmit(formData) {
		console.log('onSubmit get called! ');
        console.log('formData',formData);
		await this.props.signin(formData);
		//if (!this.props.errorMessage) {
		  //this.props.history.push('/dashboard');
		//}
	  }
	
	  async responseGoogle(res) {
		await this.props.oauthGoogle(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/dashboard');
		}
	  }
	
	  async responseFacebook(res) {
		await this.props.oauthFacebook(res.accessToken);
		if (!this.props.errorMessage) {
		  this.props.history.push('/dashboard');
		}
	  }
	
    
    render() {
		const {handleSubmit}=this.props;

        return (
			<div>
			<div class="limiter">
		<div class="container-login100" style={mystyles} >
			<div class="wrap-login100">
				<form class="login100-form validate-form" onSubmit={handleSubmit(this.onSubmit)}>
					<span class="login100-form-logo">
					<i class="zmdi zmdi-landscape"></i>					
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<fieldset>
                            <Field
                                name='email'
                                type = 'text'
                                id = 'email'
                                placeholder= 'example@example.com'
                                component= { CustumInput}
                            />
                	</fieldset>
					

                           <fieldset>
                              <Field
                                name='password'
                                type = 'password'
                                id = 'password'
                                placeholder= 'entrer votre mot de passe '
                                component= { CustumInput}
                              />
                          </fieldset>  

					

					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>

					<div class="container-login100-form-btn">
					<button class="login100-form-btn" type="submit">
						Login
					</button>			
							
					</div>

					<div class="text-center p-t-9">
						<a class="txt1" href="/">
							Forgot Password?
						</a>
					</div>
					<div class="text-center p-t-9">
                        <div class="txt1">You don't have account ?</div>
                        <a class="txt1" href="/registerEm">
                         Sign Up here
						</a>
					</div>
					<FacebookLogin
							appId="200823678007159"
							autoLoad={false}
							textButton="Link with Facebook"
							fields="name,email,picture"
							callback={this.responseFacebook}
							cssClass="btn btn-outline-primary"
						/>
						<Googlelogin
							clientId="1020396711366-kmijavhtfkivou1n6sh8tihggi14n93h.apps.googleusercontent.com"
							buttonText="Google"
							onSuccess={this.responseGoogle}
							onFailure={this.responseGoogle}
							cssClass="btn btn-outline-danger"/>
				</form>
			</div>
		</div>

	</div>
	
</div>
	

	
        );
    }
}

export default compose(
    connect(null,actions),
            reduxForm({form : 'signin'}))(SignInForm)