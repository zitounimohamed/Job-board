import React, { Component } from 'react';
import axios from 'axios'
import { connect} from 'react-redux';
import {compose} from 'redux';
import './postjob.css'
class postJob extends Component {
    constructor(props){
        super(props);
        this.state={
            email : null,
            title : null,
            location: null,
            region : null,
            type :  null,
            description : null,
            file : null,
            salaire :null , 
            genre : null ,
            dateexp : null,
            exigences : null , 
            experience : null ,
            education : null , 
            autres : null

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChange=this.onChange.bind(this)

    }
    resetForm(){
        document.getElementById('form-job').reset();
    }
   
     
    handleInputChange = (event) =>{
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
     handleSubmit = async (event)=>{
        event.preventDefault();
        const uploadedImageInfo= await this.uploadFile(this.state.file);
        console.log(uploadedImageInfo);
        const id = localStorage.getItem("id")
       let uri ="http://localhost:5000/jobs/newjob" ;
       const data ={
        email : this.state.email,
        title : this.state.title,
        location: this.state.location,
        region : this.state.region,
        type : this.state.type ,
        description : this.state.description,
        file : uploadedImageInfo.image,
        salaire : this.state.salaire,
        genre : this.state.genre , 
        dateexp : this.state.dateexp,
        exigences : this.state.exigences,
        education : this.state.education,
        experience : this.state.experience,
        autres : this.state.autres,
        user : id



       }

       console.log("data",data);
       await axios.post(uri,data).then((response)=>{
        if(response.status===200 && response!= null ){
            alert("Message Sent."); 
            window.location.reload()        

        }
        

       }).catch(error =>{
           console.log(error);
           alert("Message failed to send.")
           
       }); 

    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }

    uploadFile = async file => {
        const fd = new FormData();
        fd.append("file", file);
        try {
              const res = await axios.post("http://localhost:5000/jobs/uploadimage", fd);
              console.log(res.data);
              return res.data;
        } catch (error) {
          console.log(error);
        }
      };


    render() {
        
        
        return (
            <div>
            <div className='container' id ='cont'>
                <center><h2 className='tit'>Postuler un emploi</h2></center>
                    <form className= "p-5 p-md-5 border rounded" onSubmit={this.handleSubmit} id='form-job'>
                      <h2 className='bigtitle'>Détails de l'emploi</h2><hr/>
                        <div class="form-group pt-5 ">
                            <label for="exampleFormControlFile1" className='lab pb-3 '>Télécharger l'image sélectionnée</label>
                            <input type="file" class="form-control-file" id="logo" name="logo" onChange={this.onChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Email :</label>
                            <input class="form-control" type="text" placeholder="Exemple@exemple.com" name="email" id="email" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Titre de l'emploi :</label>
                            <input class="form-control" type="text" placeholder="Product Designer" name="title" id="title" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Location :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="location" id="location" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Region :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="region" id="region" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Type de l'emploi :</label>
                            <input class="form-control" type="text" placeholder="Type de l'emploi" name="type" id="type" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="description" id="description" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Salaire :</label>
                            <input class="form-control" type="number" placeholder="Salaire au moins" name="salaire" id="salaire" min='0' onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Genre :</label>
                            <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="genre" onChange={this.handleInputChange} required>
                            <option selected>Choisir...</option>
                            <option value="Femme" required>Femme</option>
                            <option value="Homme">Homme</option>
                            <option value="Les deux">Les deux</option>
                        </select>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Date d'expiration :</label>
                            <input class="form-control" type="date" placeholder="Date d'expiration" name="dateexp" id="dateexp" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Exigences de l'emploi :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="exigences" id="exigences" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Education :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="education" id="education" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Expérience :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="experience" id="experience" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Autres bénifices :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="autres" id="autres" onChange={this.handleInputChange} required/>
                        </div>
                       
                        <div class='row pt-5'>
                        <button type='submit' class='btn btn-primary btn-lg ' id='but' >Publier</button>
                        </div>
                    </form>
                
            </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      isAuth: state.auth.isAuthenticated,
      jwtToken: state.auth.token,
      role : state.auth.role

    }
  }

  export default compose(
    connect(mapStateToProps),
            )(postJob)