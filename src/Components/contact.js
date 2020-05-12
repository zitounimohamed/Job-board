import React, { Component } from 'react';
import './contact.css';
import bg_contact from './images/bg-01.jpg'; 
import axios from 'axios'

const mystyles ={
    backgroundImage: `url(${bg_contact})`,
    height : '145vh',
	backgroundSize : 'cover'}
	

class contact extends Component {
	constructor(props) {	
		super(props);
		this.state={
			email : null ,
			firstname : null,
			lastname : null ,
			phone : null ,
			msg : null
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	resetForm(){
        document.getElementById('contact-form').reset();
    }
	handleSubmit(e){
		e.preventDefault();
	
		
	
        axios({
            method: "POST", 
            url:"http://localhost:5000/contact/send", 
            data: {
				firstname: this.state.firstname,   
				lastname : this.state.lastname,
				phone : this.state.phone ,
                email: this.state.email,  
                msg: this.state.msg
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }
	handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    render() {
   
        return (
            <div class="container-contact1000">
		<div class="wrap-contact1000">
			<form id="contact-form" class="contact1000-form validate-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
				<span class="contact1000-form-title">
					Send Us A Message
				</span>

				<label class="label-input1000" for="first-name">Tell us your name *</label>
				<div class="wrap-input1000 rs1-wrap-input1000 validate-input" data-validate="Type first name">
					<input id="first-name" class="input1000" type="text" name="firstname" placeholder="First name" onChange={this.handleInputChange}/>
					<span class="focus-input1000"></span>
				</div>
				<div class="wrap-input1000 rs2-wrap-input1000 validate-input" data-validate="Type last name">
					<input class="input1000" type="text" name="lastname" placeholder="Last name" onChange={this.handleInputChange}/>
					<span class="focus-input1000"></span>
				</div>

				<label class="label-input1000" for="email">Enter your email *</label>
				<div class="wrap-input1000 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
					<input id="email" class="input1000" type="text" name="email" placeholder="Eg. example@email.com" onChange={this.handleInputChange}/>
					<span class="focus-input1000"></span>
				</div>

				<label class="label-input1000" for="phone">Enter phone number</label>
				<div class="wrap-input1000">
					<input id="phone" class="input1000" type="text" name="phone" placeholder="Eg. +1 800 000000" onChange={this.handleInputChange}/>
					<span class="focus-input1000"></span>
				</div>

				<label class="label-input1000" for="message">Message *</label>
				<div class="wrap-input1000 validate-input" data-validate = "Message is required">
					<textarea id="message" class="input1000" name="msg" placeholder="Write us a message" onChange={this.handleInputChange}></textarea>
					<span class="focus-input1000"></span>
				</div>

				<div class="container-contact1000-form-btn">
					<button type="submit" class="contact1000-form-btn">
						Send Message
					</button>
				</div>
			</form>

			<div class="contact1000-more flex-col-c-m" style = { mystyles} >
				<div class="flex-w size1 p-b-47">
					<div class="txt1 p-r-25">
						<span class="lnr lnr-map-marker"></span>
					</div>

					<div class="flex-col size2">
						<span class="txtt1 p-b-20">
							Address
						</span>

						<span class="txtt2">
							Mada Center 8th floor, 379 Hudson St, New York, NY 100018 US
						</span>
					</div>
				</div>

				<div class="dis-flex size1 p-b-47">
					<div class="txtt1 p-r-25">
						<span class="lnr lnr-phone-handset"></span>
					</div>

					<div class="flex-col size2">
						<span class="txtt1 p-b-20">
							Lets Talk
						</span>

						<span class="txtt3">
							+1 800 1236879
						</span>
					</div>
				</div>

				<div class="dis-flex size1 p-b-47">
					<div class="txtt1 p-r-25">
						<span class="lnr lnr-envelope"></span>
					</div>

					<div class="flex-col size2">
						<span class="txtt1 p-b-20">
							General Support
						</span>

						<span class="txtt3">
							contact@example.com
						</span>
					</div>
				</div>
			</div>
		</div>
        
	</div>

        );
    }
}

export default contact;