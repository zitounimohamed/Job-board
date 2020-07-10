import React, { Component } from 'react';
import Axios from 'axios';

class ajouterForma extends Component {
    constructor(props){
        super(props);
        this.state={
            email : '',
            titre : '',
            lieu : '',
            ville : '',
            description: '',
            type : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event){
        this.setState({
            
            [event.target.name] : event.target.value,
            
        })
    }
    async handleSubmit(){
        let uri ="http://localhost:5000/formations/newforma" ;
        const data = {
            email : this.state.email,
            type : this.state.type,
            titre : this.state.titre,
            description : this.state.description,
            lieu : this.state.lieu, 
            ville : this.state.ville
        }
        await Axios.post(uri,data).then((response)=>{
            if(response.status===200 && response!= null ){
                window.location.reload()  ;      
            }
        }).catch(error =>{
            console.log(error);
            alert("Message failed to send.")
        
        }
        )}

    render() {
        return (
            <div>
                 <div className='container' id ='cont'>
                <center><h2 className='tit'>Postuler une formation</h2></center>
                    <form className= "p-5 p-md-5 border rounded" onSubmit={this.handleSubmit} id='form-job'>
                      <h2 className='bigtitle'>Détails de formation</h2><hr/>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Email :</label>
                            <input class="form-control" type="text" placeholder="Exemple@exemple.com" name="email" id="email" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Titre de foramtion :</label>
                            <input class="form-control" type="text" placeholder="Product Designer" name="titre" id="titre" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Lieu :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="lieu" id="lieu" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Ville :</label>
                            <input class="form-control" type="text" placeholder="Tunis" name="ville" id="ville" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Type de formation :</label>
                            <input class="form-control" type="text" placeholder="Type de l'emploi" name="type" id="type" onChange={this.handleInputChange} required/>
                        </div>
                        <div class='form-group pt-3 pb-5'>
                            <label for="exampleFormControlFile1" className='lab pb-3'>Déscription :</label>
                            <textarea rows ="10" class="form-control" type="text" placeholder="Décrire l'emploi" name="description" id="description" onChange={this.handleInputChange} required/>
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

export default ajouterForma;