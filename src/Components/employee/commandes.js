import React, { Component } from 'react';
import ImageSlider from '../../views/imageslider'
import axios from 'axios'
import {Link} from 'react-router-dom'
class commandes extends Component {
    constructor(props){
        super(props);
        this.state={
            apply : []
        }
    }
    componentDidMount(){
        const id = localStorage.getItem('id')
    
    let url = `http://localhost:5000/demandes/myapply/${id}`
    axios.get(url).then((response) => {
        console.log(response);
      

        this.setState({
            apply: response.data 
        });
        
    }).catch(error => {
        console.log(error);
    });
    }
    render() {
        return (
            <div>
            {this.state.apply !== null && this.state.apply.map(apply => {

                return (
                    
            <div>
                <div class="container">
				<div class="row">
			<div class="col-md-12 ftco-animate">
            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h3">{apply.email}  </h2>
                  <a href={`/${apply.file}`} download>Cliquer ici pour télécharger le fichier</a>
                  <div class="badge-wrap">
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                <div><span class="icon-my_location"></span> <span>{apply.nom}</span></div>
                </div>
              </div>
              <div class="ml-auto d-flex">
                <button href={this.props.filep}  class="btn btn-primary py-2 mr-1">Mon cv</button>
              </div>
            </div>
          </div>
          </div>
          </div>
            </div>)
        })}
        </div>
        );
    }
}

export default commandes;