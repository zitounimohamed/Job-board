import React, { Component } from 'react';
import axios from 'axios'
import './cv.css'
import { connect} from 'react-redux';
import setAuthToken from '../../utils/Authorization'
import {compose} from 'redux';
import * as actions from '../../actions/index'

class Cv extends Component {
    constructor(props){
        super(props);
        this.state={
            file : null ,
            titre : null ,
            type : null , 
            categ : null , 
            comp : null , 
            filep : null , 
            tel : null , 
            exp : null,
            formvalid : false,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChange=this.onChange.bind(this)

    }
    resetForm(){
        document.getElementById('employe-form').reset();
    }
     
     
    handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    
     handleSubmit = async event=>{
        event.preventDefault();
        const id = localStorage.getItem('id')
        const uploadedImageInfo= await this.uploadFile(this.state.file);
        const uploadpdfinfo = await this.uploadFilepdf(this.state.filep) ;
        console.log(uploadedImageInfo);
        
       let uri ="http://localhost:5000/cvs/newcv" ;
       const variables = {
        writer : id,
        file : uploadedImageInfo.image,
        titre: this.state.titre,
        type: this.state.type,
        categ: this.state.categ,
        comp: this.state.comp,
        tel: this.state.tel,
        exp: this.state.exp,
        filep : uploadpdfinfo.pdf
    }
       

       console.log("data",variables);
       await axios.post(uri,variables
       ).then((response)=>{
        if(response.status===200 && response!= null ){
            alert("Message Sent."); 
        this.resetForm()
        }
        

       }).catch(error =>{
           console.log(error);
           alert("Message failed to send.")
           
       }); 

    }
    handleChange = (e) => {
        this.setState({filep: e.target.files[0]})
    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }

     
    uploadFile = async file => {
        const fd = new FormData();
        fd.append("file", file);
        try {
              const res = await axios.post("http://localhost:5000/cvs/uploadimage", fd);
              console.log(res.data);
              return res.data;
        } catch (error) {
          console.log(error);
        }
      };
      uploadFilepdf = async filep => {
        const f = new FormData();
        f.append("file", filep);
        try {
              const res = await axios.post("http://localhost:5000/cvs/uploadpdf", f);
              console.log(res.data);
              return res.data;
        } catch (error) {
          console.log(error);
        }
      };
    
    
    render() {  
        
        return (
        <div>
            <br/><br/><br/><br/>
                <figure className='figcv'><h1>Ajouter un CV</h1></figure>
            <div class='container '>
                <form id="employe-form"onSubmit={this.handleSubmit} >
                <div className='row'>
                <div className='col'>
                    <div class="form-group pt-5 ">
                    <label for="exampleFormControlFile1">Votre image</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="file" onChange={this.onChange} required/>
                    
                </div>
                </div>
                <div className='col'>

                <div class="form-group pt-5 ">
                    <label for="exampleFormControlFile1">Votre cv</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="filep" onChange={this.handleChange} required/>
                    
                </div>
                </div>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Titre de poste désiré</label>
                    <input class="form-control" type="text" placeholder="Default input" name="titre" id="titre" onChange={this.handleInputChange} required/>
                </div>
                <div class='row'>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Type d'emploi</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="type" onChange={this.handleInputChange} required>
                            <option selected>Choisir...</option>
                            <option value="cdi">CDI</option>
                            <option value="cd">CD</option>
                            <option value="three">Three</option>
                        </select>
                    </div>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Catégorie</label>
                        <input class="form-control" type="text" placeholder="Default input" name="categ" onChange={this.handleInputChange} required/>
                    </div>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Compétences</label>
                    <textarea class="form-control" type="text" placeholder="Default input" name="comp" onChange={this.handleInputChange}required></textarea>
                </div>
                
                <div class='form-group'>
                        <label for="exampleFormControlFile1">Telephone</label>
                        <input class="form-control" type="tel" placeholder="Default input" name='tel' onChange={this.handleInputChange} required></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Expérience</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="exp" onChange={this.handleInputChange} required>
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
      token: state.auth.token,
      iduser : state.auth.id

	}
  }

export default compose (
    connect(mapStateToProps,actions))(Cv)