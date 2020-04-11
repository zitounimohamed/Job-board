import React, { Component } from 'react';
import './pichome.css'
import Background from './images/hero_1.jpg'
const mystyles ={
    backgroundImage: `url(${Background})`,
    height : '150vh',
    backgroundSize : 'cover' 

}

class pichome extends Component {
    render() {
        return (
            
           <header className="masthead" style={mystyles}>
    <div className="container">
               <form class="search-jobs-form ">
              <div class="row mb-5">
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input type="text" class="form-control form-control-lg-0" placeholder="Job title, keywords..."/>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select class="form-control">
                    <option>Anywhere</option>
                    <option>San Francisco</option>
                    <option>Palo Alto</option>
                    <option>New York</option>
                    <option>Manhattan</option>
                    <option>Ontario</option>
                    <option>Toronto</option>
                    <option>Kansas</option>
                    <option>Mountain View</option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select class="form-control">
                    <option>Part Time</option>
                    <option>Full Time</option>
                    <option>Freelancer</option>
                  </select>
                </div>
                <div class="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button type="submit" class="btn btn-primary btn-lg-0  mb-9 btn-block text-white btn-search"><span class="icon-search icon mr-2"></span>Search Job</button>
                </div>
              </div>
            </form>
      <div className="intro-text">
        <div className="intro-lead-in">Welcome To Our Job Board!</div>
        <div className="intro-heading text-uppercase">join us now for the best job</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Get started</a>
      </div>
    </div>
  </header>
 
        );
    }
}

export default pichome;