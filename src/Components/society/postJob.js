import React, { Component } from 'react';
import axios from 'axios'
import './postjob.css'
class postJob extends Component {
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

       let uri ="http://localhost:5000/jobs/newjob" ;
       const data ={
        email : this.state.email,
        title : this.state.title,
        location: this.state.location,
        region : this.state.region,
        type : this.state.type ,
        description : this.state.description,
        company_name : this.state.company_name,
        tagline : this.state.tagline ,
        cDisc : this.state.cDisc,
        site : this.state.site,
        logo : this.state.logo


       }

       console.log("data",data);
       await axios.post(uri,data).then((response)=>{
           console.log(response);

       }).catch(error =>{
           console.log(error);
           
       }); 

    }
    onChange = (e) => {
        this.setState({file: e.target.files[0]})
    }
    render() {
        return (
            <div>
            <div className='container' id ='cont'>
                <h2 className='tit'>Postuler un emploi</h2>
                    <form className= "p-5 p-md-5 border rounded"onSubmit={this.handleSubmit}>
                      <h2 className='bigtitle'>Détails de l'emploi</h2><hr/>
                        <div class="form-group pt-5 ">
                            <label for="exampleFormControlFile1" className='lab pb-3 '>Télécharger l'image sélectionnée</label>
                            <input type="file" class="form-control-file" id="logo" name="logo" onChange={this.onChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Email :</label>
                            <input class="form-control" type="text" placeholder="Exemple@exemple.com" name="email" id="email" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Titre de l'emploi :</label>
                            <input class="form-control" type="text" placeholder="Product Designer" name="title" id="title" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Location :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="location" id="location" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Region :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="region" id="region" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Type de l'emploi :</label>
                            <input class="form-control" type="text" placeholder="Type de l'emploi" name="type" id="type" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="description" id="description" onChange={this.handleInputChange}/>
                        </div>
                        <h2>Détails de l'emploi</h2><hr/>
                        <div class='form-group pt-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Nom de votre société :</label>
                            <input class="form-control" type="text" placeholder="nom d'entreprise" name="company_name" id="company_name" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Slogan :</label>
                            <input class="form-control" type="text" placeholder="Slogan" name="tagline" id="tagline" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription de société :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire le société" name="cDisc" id="cDisc" onChange={this.handleInputChange}/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Site Web :</label>
                            <input class="form-control" type="text" placeholder="https://" name="site" id="site" onChange={this.handleInputChange}/>
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

export default postJob;