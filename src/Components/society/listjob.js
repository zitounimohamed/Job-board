import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class listjob extends Component {
    render() {
        return (
          <section class="ftco-section bg-light">
			<div class="container">
				<div class="row justify-content-center mb-5 pb-3">
          <div class="col-md-7 heading-section text-center ftco-animate">
          	<span class="subheading">Recently Added Jobs</span>
            <h2 class="mb-4"><span>Recent</span> Jobs</h2>
          </div>
        </div>
				<div class="row">
					<div class="col-md-12 ftco-animate">

            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">

              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h3">
                  <Link to ={`/singlejob/${1}`}>{this.props.title}</Link>  
                  </h2>
                  <div class="badge-wrap">
                   <span class="bg-primary text-white badge py-2 px-3">{this.props.type}</span>
                  </div>
                </div>
                <div class="job-post-item-body d-block d-md-flex">
                  <div class="mr-3"><span class="icon-layers"></span> <a href="/">  </a></div>
                  <div><span class="icon-my_location"></span> <span></span></div>
                </div>
              </div>

              <div class="ml-auto d-flex">
                <a href="job-single.html" class="btn btn-primary py-2 mr-1">Apply Job</a>
               
              </div>
            </div>
          </div>
          </div>
          
           
          
          </div>
            </section>
        );
    }
}

export default listjob;