import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import * as actions from '../../actions/index'
import { connect} from 'react-redux';
import {compose} from 'redux';

class listjob extends Component {
  
    render() {
        return (
			<div class="container">
				
				<div class="row pt-3">
					<div class="col-md-12 ftco-animate">

            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center ">

              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h3 class="mr-3 text-black h3" >
                  {this.props.title}  
                  </h3>
                  <div class="badge-wrap">
                   <span class="bg-primary text-white badge py-2 px-3">{this.props.type}</span>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3"><span class="icon-layers"></span> <h6> {this.props.location} </h6></div>
                  <div><span class="icon-my_location"></span> <span></span></div>
                </div>
              </div>

              <div class="ml-auto d-flex">
                <Link to ={`/singlepage/${this.props._id}`}class="btn btn-primary py-2 mr-1">Apply Job</Link>
               
              </div>
            </div>
          </div>
          </div>
          
           
          
          </div>
        );
    }
}

export default listjob