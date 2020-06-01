import React, { Component } from 'react';
import axios from 'axios'
import './cv.css'
import { connect} from 'react-redux';

import {compose} from 'redux';

class Cv extends Component {
    constructor(props){
        super(props);
        this.state={
            file : null ,
            titre : null ,
            type : null , 
            categ : null , 
            comp : null , 
            //cvfile : null , 
            tel : null , 
            exp : null

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
        this.uploadFile(this.state.file)
       let uri ="http://localhost:5000/cvs/newcv" ;
       const variables = {
        writer : this.props.data._id,
        titre: this.state.titre,
        type: this.state.type,
        categ: this.state.categ,
        comp: this.state.comp,
        //cvfile: this.state.cvfile,
        tel: this.state.tel,
        exp: this.state.exp,
    }
       

       console.log("data",variables);
       await axios.post(uri,variables
       ).then((response)=>{
           console.log(response);

       }).catch(error =>{
           console.log(error);
           
       }); 

    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }

     
    uploadFile = async (file) => {
        const fd = new FormData();
        fd.append('file', file);
        await axios.post('http://localhost:5000/cvs/uploadimage',fd)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))

     }

    
    
    render() {  
        
        return (
        <div>
            <br/><br/><br/><br/>
                <figure className='figcv'><h1>Ajouter un CV</h1></figure>
            <div class='container '>
                <form onSubmit={this.handleSubmit}>
                <div class="form-group pt-5 ">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="file" onChange={this.onChange}/>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Titre de poste désiré</label>
                    <input class="form-control" type="text" placeholder="Default input" name="titre" id="titre" onChange={this.handleInputChange}/>
                </div>
                <div class='row'>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Type d'emploi</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="type" onChange={this.handleInputChange}>
                            <option selected>Choisir...</option>
                            <option value="cdi">CDI</option>
                            <option value="cd">CD</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Catégorie</label>
                        <input class="form-control" type="text" placeholder="Default input" name="categ" onChange={this.handleInputChange}></input>
                    </div>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Compétences</label>
                    <textarea class="form-control" type="text" placeholder="Default input" name="comp" onChange={this.handleInputChange}></textarea>
                </div>
                
                <div class='form-group'>
                        <label for="exampleFormControlFile1">Telephone</label>
                        <input class="form-control" type="tel" placeholder="Default input" name='tel' onChange={this.handleInputChange}></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Expérience</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="exp" onChange={this.handleInputChange}>
                        <option selected>Selectionner votre expérience...</option>
                        <option value="Débutant">Débutant</option>
                        <option value="0 à 1 an">0 à 1 an</option>
                        <option value="1 à 2 ans">1 à 2 ans</option>
                        <option value="3 ans ou plus">3 ans ou plus</option>

                    </select>
                </div>

                <div class='row'>
                        <button type='submit' class='btn btn-primary center-block' id='but' >Publier</button>
                </div>
                </form>
            </div>
        </div>
        );
    }
}
function mapStateToProps(state) {
	return {
      errorMessage: state.auth.errorMessage,
      isAuth : state.auth.isAuthenticated,
      jwtToken : state.auth.token,
      data : state.auth.userData
	}
  }

export default compose (
    connect(mapStateToProps))(Cv)