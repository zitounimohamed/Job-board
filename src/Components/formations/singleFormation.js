import React, { Component } from 'react';
import Axios from 'axios';

class singleFormation extends Component {
    constructor(props){
        super(props);
        this.state={
            forma : ''
        }
    
    }

    async componentDidMount(){
        const {id} = this.props.match.params

        await Axios.get(`http://localhost:5000/formations/${id}`)
        .then((response)=>{
            if( response!= null )
            {
            this.setState({forma : response.data})
            }
        })
    }
    render() {        
        return (
    <section class="site-section">
            <div class="container">
              <div class="row align-items-center mb-5" style={{paddingTop : 150}}>
                <div class="col-lg-8 mb-4 mb-lg-0" >
                  <div class="d-flex align-items-center">
                    <div class="border p-2 d-inline-block mr-3 rounded">
                    </div>
                    <div>
                      <h2 >{this.state.forma.titre}</h2>
                      <div>
                        <span class=" mr-2 mb-2"><span class="icon-briefcase mr-2"></span>{this.state.forma.type}</span>
                        <span class="m-2"><span class="icon-room mr-2"></span>  </span>
                        <span class="m-2"><span class="icon-clock-o mr-2"></span><span class="text-primary">   </span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="bg-light p-3 border rounded mb-4">
                    <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Résumé de formation</h3>
                    <ul class="list-unstyled pl-3 mb-0">
                      <li class="mb-2"><strong class="text-black">Type de formation:</strong> {this.state.forma.type}</li>
                      <li class="mb-2"><strong class="text-black">Lieu:</strong> {this.state.forma.lieu} </li>
                      <li class="mb-2"><strong class="text-black">Ville:</strong> {this.state.forma.ville} </li>
                      <li class="mb-2"><strong class="text-black">Email :</strong> {this.state.forma.email} </li>
                    </ul>
                  </div>
          
                 
          
                </div>
              </div>
              <div class="row">
                <div class="col-lg-8">
                  <div class="mb-5" style={{marginTop:'-55px'}}>
                   
                    <h3 class="h5 d-flex align-items-center mb-4 text-primary "><span class="fa fa-briefcase pr-2"></span>Déscription de l'emploi</h3>
                    <p>
                      {this.state.forma.description}
                    </p>
                    
                  </div>
                </div>
                <div class="col-lg-4">
                  
          
                 
          
                </div>
              </div>
            </div>
            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Envoyer une demande de travail</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form>
                <div class="form-group" onSubmit={this.handleSubmit}>
                  <label for="recipient-name" class="col-form-label">Votre Nom:</label>
                  <input type="text" class="form-control" id="nom" name="nom" onChange={this.handleInputChange} required />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Votre Email:</label>
                  <input type="text" class="form-control" name='email' id="recipient-name" onChange={this.handleInputChange} required/>
                </div>
                <div class="form-group">
                <label for="recipient-name" class="col-form-label">Votre Cv : </label>
                  <input type="file" class="form-control" name="file" id="exampleFormControlFile1" onChange={this.onChange} required/>
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">Lettre de motivation:</label>
                  <textarea class="form-control" id="message-text" name='lettre' onChange={this.handleInputChange} required></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type='submit' onClick={this.handleSubmit} class="btn btn-primary">Postuler</button>
            </div>
          </div>
        </div>
      </div>
    </section>
        );
    }
}

export default singleFormation;