import React, { Component } from 'react';
import ImageSlider from '../../views/imageslider';

class listcv extends Component {
    

    render() {
       
        return (
            <div>
                <br/><br></br>
			<div class="container">
				<div class="row">
			<div class="col-md-12 ftco-animate">
            <div class="job-post-item bg-white p-4 d-block d-md-flex align-items-center">
              <div class="mb-4 mb-md-0 mr-5">
                <div class="job-post-item-header d-flex align-items-center">
                  <h2 class="mr-3 text-black h3">{this.props.titre}  </h2>
                  <ImageSlider file={this.props.file}></ImageSlider>
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
                <button onClick={this.props.filep}  class="btn btn-primary py-2 mr-1">Mon cv</button>
              </div>
            </div>
          </div>
          </div>
          </div>
        </div>              
        );
    }
}

export default listcv;