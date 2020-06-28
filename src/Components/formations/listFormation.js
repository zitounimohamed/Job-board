import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class listFormation extends Component {
  
  
    render() {
        return (
			<div className="container">
				
				<div className="row pt-3">
					<div className="col-md-12 ftco-animate">

            <div className="job-post-item bg-white p-4 d-block d-md-flex align-items-center ">

              <div className="mb-4 mb-md-0 mr-5">
                <div className="job-post-item-header d-flex align-items-center">
                  <h3 className="mr-3 text-black h3" >
                  {this.props.titre}  
                  </h3>
                  <div className="badge-wrap">
                   <span className="bg-primary text-white badge py-2 px-3">{this.props.type}</span>
                  </div>
                </div>
                <div className="job-post-item-body d-block d-md-flex">
                  <div className="mr-3"><span className="icon-layers"></span> <h6> {this.props.ville} </h6></div>
                  <div><span className="icon-my_location"></span> <span></span></div>
                </div>
              </div>

              <div className="ml-auto d-flex">
                <Link to ={`/singleFormation/${this.props._id}`}className="btn btn-primary py-2 mr-1">Plus Détails</Link>
              </div>
            </div>
          </div>
          </div>
          
           
          
          </div>
        );
    }
}

export default listFormation