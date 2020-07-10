import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions/index'
import axios from 'axios'
import {Link} from 'react-router-dom'



class singlejob extends Component {
  constructor(props){
    super(props);
    this.state = {
      job: '',
      nom : null ,
      email : null , 
      file : null , 
      lettre : null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onChange=this.onChange.bind(this)
  }
  onChange = (e) => {
    this.setState({file: e.target.files[0]})
}

  handleInputChange = (event) =>{
    this.setState({
        
        [event.target.name] : event.target.value,
        
    })
}
uploadFile = async file => {
  const fd = new FormData();
  fd.append("file", file);
  try {
        const res = await axios.post("http://localhost:5000/demandes/uploadpdf", fd);
        console.log(res.data);
        return res.data;
  } catch (error) {
    console.log(error);
  }
};
handleSubmit = async (event)=>{
  event.preventDefault();
  const uploadedPdfInfo= await this.uploadFile(this.state.file);
  let url = "http://localhost:5000/demandes/newapply" 
  const data ={
    file : uploadedPdfInfo.pdf,
    nom : this.state.nom,
    email : this.state.email , 
    lettre : this.state.lettre
  }
  await axios.post(url,data).then((response)=>{
    console.log(response);
    
}).catch(error =>{
    console.log(error);
    
}); 
}
  async componentDidMount(){
    const {id} = this.props.match.params
    console.log('id',id);
    
     await axios.get(`http://localhost:5000/jobs/${id}`)

      .then(( response ) => {
        if(response.status===200 && response!= null )
        {
          this.setState({job : response.data})
        }
       
      })
    
  }
   /*deletejob(id){
     axios.delete(`http://localhost:5000/jobs/deletejob/${id}`)
      .then((response)=>{
        if(response.status===200 && response!= null)
        {
          console.log("done");
          
        }
      })
  }*/
    render() {
      const isAdmin = this.props.isAdmin      
      const admin = (isAdmin==="true") ? (
        <button type="button" class="btn btn-primary" >
        Modifier
     </button>
     
      ) :(
        <div></div>
      ) ;
      
        return (
            <section class="site-section">
      <div class="container">
        <div class="row align-items-center mb-5" style={{paddingTop : 150}}>
          <div class="col-lg-3 mb-4 mb-lg-0" >
            <div class="d-flex align-items-center">
              <div class="border p-2 d-inline-block mr-3 rounded">
              <img style={{ width: '100%', maxHeight: '80px' }}
                            src={`http://localhost:5000/${this.state.job.file}`} alt="pieceImage" />
              </div>
              <div>
                <h2 >{this.state.job.title}</h2>
                <div>
                  <span class=" mr-2 mb-2"><span class="icon-briefcase mr-2"></span>{this.state.job.company_name}</span>
                  <span class="m-2"><span class="icon-room mr-2"></span>  </span>
                  <span class="m-2"><span class="icon-clock-o mr-2"></span><span class="text-primary">   </span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-5">
             
              <h3 class="h5 d-flex align-items-center mb-4 text-primary "><span class="fa fa-briefcase pr-2"></span>Déscription de l'emploi</h3>
              <p>
                {this.state.job.description}
              </p>
              
            </div>
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span
                  class="fa fa-rocket pr-2"></span>Exigences de l'emploi
                  </h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2">
                  <span class="icon-check_circle mr-2 text-muted"></span>
                  <span>{this.state.job.exigences}</span>
                </li>
                
              </ul>
            </div>
    
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="fa fa-book pr-2"></span>Education +
                Experience</h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>{this.state.job.eduction}</span>
                </li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>{this.state.job.experience}</span>
                </li>
                
              </ul>
            </div>
    
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="fa fa-forward pr-2"></span>
              Autres bénéfices</h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>{this.state.job.autres}</span></li>
               
              </ul>
            </div>
    
            
          </div>
          <div class="col-lg-4">
            <div class="bg-light p-3 border rounded mb-4">
              <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Résumé de l'emploi</h3>
              <ul class="list-unstyled pl-3 mb-0">
                <li class="mb-2"><strong class="text-black">Type de travail:</strong> {this.state.job.type}</li>
                <li class="mb-2"><strong class="text-black">Expérience:</strong> {this.state.job.exp} </li>
                <li class="mb-2"><strong class="text-black">Location:</strong> {this.state.job.location} </li>
                <li class="mb-2"><strong class="text-black">Salaire:</strong> Au moins {this.state.job.salaire} </li>
                <li class="mb-2"><strong class="text-black">Genre:</strong> {this.state.job.genre}</li>
                <li class="mb-2"><strong class="text-black">Date d'expiration:</strong> {this.state.job.dateexp} </li>
              </ul>
            </div>
    
            <div class="bg-light p-3 border rounded">
            <div class="row">
              <div class="col-6 ml-5 pl-4">
{ /*               <button onClick=>{()this.deletejob(this.state.job._id)}  class="btn btn-block btn-light btn-md"><i  class="fa fa-trash" aria-hidden="true" style={{paddingLeft : 12 , height : 40, paddingRight:12, paddingTop :10}}></i>Supprimer</button>
*/}            
                  {admin}
              </div>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                 Postuler
              </button>
            </div>
              
            </div>
    
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


    
function mapStateToProps(state) {
	return{
		errorMessage: state.auth.errorMessage,
		isAuth : state.auth.isAuthenticated,
		isAdmin: state.auth.isAdmin

	}	
}

export default compose(
  connect(mapStateToProps,actions),
          )(singlejob)