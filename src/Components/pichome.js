import React, { Component } from 'react';
import './pichome.css'
import Background from './images/hero_1.jpg'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
const mystyles ={
    backgroundImage: `url(${Background})`,
    height : '110vh',
    backgroundSize : 'cover' 

}

class pichome extends Component {
  constructor(props) {
		super(props);
		this.state = {
      jobs: [],
      title: '',
      lieu : '',
      type : ''
		};
		this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
	}
	onChangeSearchTitle(e) {
  
		this.setState({
      [e.target.name] : e.target.value
    });
    
	}
	componentWillMount() {
		//this.getsearch();
	}
  
    render() {
      console.log("jobs",this.state.jobs);

        return (
           <header className="masthead" style={mystyles}>
    <div className="container">
               
      <div className="intro-text">
        <div className="intro-lead-in"></div>
        <div className="intro-heading text-uppercase">REJOIGNEZ-NOUS MAINTENANT POUR LE MEILLEUR EMPLOI</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Connecter-Vous</a>
      </div>
    </div>
  </header>
 
        );
    }
}

export default pichome;