import React, { Component } from 'react';

class rech_result extends Component {
    render() {
        return (
            <div>
            <br/><br></br><br/><br></br>
        <div class="container">
            <div class="row">
        <div class="col-md-12 ftco-animate">
        <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
          <div class="mb-4 mb-md-0 mr-5">
            <div class="job-post-item-header d-flex align-items-center">
              <h2 class="mr-3 text-black h3">{this.props.titre}  </h2>
              <img src="" alt={`data:imag/jpeg;base64,${this.props.file}`} class="img-fluid"></img>
              <div class="badge-wrap">
               <span class="bg-primary text-white badge py-2 px-3">Partime</span>
              </div>
            </div>
            <div class="job-post-item-body d-block d-md-flex">
              <div class="mr-3"><span class="icon-layers"></span> <a href="/">Facebook, Inc.</a></div>
              <div><span class="icon-my_location"></span> <span>Western City, UK</span></div>
            </div>
          </div>
          <div class="ml-auto d-flex">
            <a href="job-single.html" class="btn btn-primary py-2 mr-1">Ouvrir le cv</a>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>          
        );
    }
}

export default rech_result;