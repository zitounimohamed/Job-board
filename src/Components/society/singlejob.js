import React, { Component } from 'react';
import { connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../../actions/index'
import axios from 'axios'


class singlejob extends Component {
  constructor(props){
    super(props);
    this.state = {
      job: ''
    }
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
    render() {
      console.log(this.state.job);
        return (
            <section class="site-section">
      <div class="container">
        <div class="row align-items-center mb-5" style={{paddingTop : 150}}>
          <div class="col-lg-8 mb-4 mb-lg-0" >
            <div class="d-flex align-items-center">
              <div class="border p-2 d-inline-block mr-3 rounded">
              <img style={{ width: '10%', maxHeight: '10px' }}
                            src={`http://localhost:5000/${this.state.job.file}`} alt="pieceImage" />
              </div>
              <div>
                <h2 >{this.state.job.title}</h2>
                <div>
                  <span class="ml-0 mr-2 mb-2"><span class="icon-briefcase mr-2"></span>Puma</span>
                  <span class="m-2"><span class="icon-room mr-2"></span>  </span>
                  <span class="m-2"><span class="icon-clock-o mr-2"></span><span class="text-primary">   </span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row">
              <div class="col-6">
                <a href="/" class="btn btn-block btn-light btn-md"><span class="icon-heart-o mr-2 text-danger"></span>Save
                  Job</a>
              </div>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="/exampleModalCenter">
                 Postuler
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="mb-5">
             
              <h3 class="h5 d-flex align-items-center mb-4 text-primary "><span class="fa fa-briefcase pr-2"></span>Job
                Description</h3>
              <p>
                {this.state.job.description}
              </p>
              
            </div>
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span
                  class="fa fa-rocket pr-2"></span>Responsibilities</h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis n Velit unde aliquam et voluptas reiciendis non sapiente
                    labore</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="fa fa-book pr-2"></span>Education +
                Experience</h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            <div class="mb-5">
              <h3 class="h5 d-flex align-items-center mb-4 text-primary"><span class="fa fa-forward pr-2"></span>Other
                Benifits</h3>
              <ul class="list-unstyled m-0 p-0">
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Necessitatibus quibusdam facilis</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Velit
                    unde aliquam et voluptas reiciendis non sapiente labore</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Commodi quae ipsum quas est itaque</span></li>
                <li class="d-flex align-items-start mb-2"><span class="icon-check_circle mr-2 text-muted"></span><span>Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit</span></li>
                <li class="d-flex align-items-start mb-2"><span
                    class="icon-check_circle mr-2 text-muted"></span><span>Deleniti asperiores blanditiis nihil quia
                    officiis dolor</span></li>
              </ul>
            </div>
    
            
          </div>
          <div class="col-lg-4">
            <div class="bg-light p-3 border rounded mb-4">
              <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Job Summary</h3>
              <ul class="list-unstyled pl-3 mb-0">
                <li class="mb-2"><strong class="text-black">Published on:</strong> April 14, 2019</li>
                <li class="mb-2"><strong class="text-black">Vacancy:</strong> 20</li>
                <li class="mb-2"><strong class="text-black">Employment Status:</strong> {this.state.job.type}</li>
                <li class="mb-2"><strong class="text-black">Experience:</strong> {this.state.job.exp} </li>
                <li class="mb-2"><strong class="text-black">Job Location:</strong> {this.state.job.location} </li>
                <li class="mb-2"><strong class="text-black">Salary:</strong> $60k - $100k</li>
                <li class="mb-2"><strong class="text-black">Gender:</strong> Any</li>
                <li class="mb-2"><strong class="text-black">Application Deadline:</strong> April 28, 2019</li>
              </ul>
            </div>
    
            <div class="bg-light p-3 border rounded">
              <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">Share</h3>
              <div class="px-3">
                <a href="/" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-facebook"></span></a>
                <a href="/" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-twitter"></span></a>
                <a href="/" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-linkedin"></span></a>
                <a href="/" class="pt-3 pb-3 pr-3 pl-0"><span class="icon-pinterest"></span></a>
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
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Votre Nom:</label>
            <input type="text" class="form-control" id="nom" nom="nom" />
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Votre Email:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
          <label for="recipient-name" class="col-form-label">Votre Cv : </label>
            <input type="file" class="form-control" id="exampleFormControlFile1"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Lettre de motivation:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Postuler</button>
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
		token: state.auth.token

	}	
}

export default compose(
  connect(null,actions),
          )(singlejob)