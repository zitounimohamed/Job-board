import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions'
import {  reduxForm} from 'redux-form';

import './register.css'
class register extends Component {
    constructor(props){
        super(props);
        this.state={
            email : null ,
            name : null ,
            pass : null , 
            re_pass : null , 
            nomEn : null , 
            site : null , 
            tel : null,
            emp:null ,
            //logo : null ,
            desc : null


        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChange=this.onChange.bind(this)

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
        name : this.state.name ,
        pass : this.state.pass , 
        re_pass : this.state.re_pass , 
        nomEn : this.state.nomEn , 
        site : this.state.site , 
        tel : this.state.tel,
        emp:this.state.emp ,
        //logo : this.state.logo ,
        desc : this.state.desc
       }

       console.log("data",data);
       await this.props.signupS(data);
          
           if (!this.props.errorMessage) {
            this.props.history.push('/home');}
      

    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }
    render() {
        return (
            
    <section class="signup">
        <div class="container">
            <div className='registerr'>
                <div class="signup-content">
                    <div class="signup-form">
                        <div className='form-row'>
                            <div className='col'>
                        <h2 class="form-title">Créer votre espace employeur :</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div class='row'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Email :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="email" id="email" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Nom & prénom :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="name" id="name" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        <div class='row pt-3'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Mot de passe :*</label>
                            <input class="form-control" type="password" placeholder="Default input" name="pass" id="pass" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Confirmer mot de passe :*</label>
                            <input class="form-control" type="password" placeholder="Default input" name="re_pass" id="re_pass" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        <div class='row pt-3'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Nom de l'entreprise :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="nomEn" id="nomEn" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Site Web :</label>
                            <input class="form-control" type="text" placeholder="Default input" name="site" id="site" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        <div class='row pt-3'>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Telephone :*</label>
                            <input class="form-control" type="tel" placeholder="Default input" name="tel" id="tel" onChange={this.handleInputChange}/>
                        </div>
                        <div class='col'>
                            <label for="exampleFormControlFile1" className='lab'>Emplacement :*</label>
                            <input class="form-control" type="text" placeholder="Default input" name="emp" id="emp" onChange={this.handleInputChange}/>
                        </div>    
                        </div>
                        {/*<div class="form-group pt-3 ">
                            <label for="exampleFormControlFile1" className='lab'>Logo</label>
                            <input type="file" class="form-control-file" id="logo" name="logo" onChange={this.onChange}/>
                         </div>*/}
                        <div class='form-group' >
                            <label for="exampleFormControlFile1" className='lab'>Description de societé :*</label>
                            <textarea class="form-control" type="text" placeholder="Default input" name="desc" onChange={this.handleInputChange}></textarea>
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" checked/>
                            <label class="form-check-label" for="exampleCheck1">J'accepte les conditions d'utilisation *</label>
                        </div>
                        <button  type='submit' class="btn btn-primary btn-lg btn-block">Inscription</button>

                    </form>
                    </div>
                </div></div>
                    <div className='col'>
                    <div class="signup-image">
                        <figure className='fig'>
                        <p>Créer un profil dans notre site web vous aidera à
                        Gagner du temps en contactant les bons candidats</p>
                        <p className='pt-5'>
                        Chercheur d'emploi ?

                        Si vous êtes à la recherche d'un emploi, rendez-vous à la rubrique <a href='/registerEm'>Inscription</a> d'un demandeur d'emploi
                        </p>
                        </figure>

                    </div>
                    </div>
                    
                </div>
                </div>
                </div>

        </section>
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
            reduxForm({form : 'register'}))(register)
