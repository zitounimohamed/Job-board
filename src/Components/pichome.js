import React, { Component } from 'react';
import './pichome.css'
import Background from './images/hero_1.jpg'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
const mystyles ={
    backgroundImage: `url(${Background})`,
    height : '140vh',
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
	getsearch = async () => {
    window.location.href = ('/listJSearch' +  "/"+ this.state.title + "/"+this.state.lieu+"/"+this.state.type)
 }

  
    render() {
      console.log("jobs",this.state.jobs);

        return (
           <header className="masthead" style={mystyles}>
    <div className="container">
               
      <div className="intro-text">
        <div className="intro-lead-in">
        <div className="list row">
							<div className="col md-8" style={{paddingBottom : '60px'}}>
								<form className="search-jobs-form ">
									<div className="row mb-5">
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<input
												type="text"
												className="form-control form-control-lg-0"
												name="title"
												placeholder="Titre emploi, clé..."
												value={this.state.title}
												onChange={this.onChangeSearchTitle}
												required
											/>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<select
												name="lieu"
												className="form-control"
												onChange={this.onChangeSearchTitle}
												value={this.state.lieu}

												required
											>
												<option>N'impote où</option>
												<option value="Ariana">Ariana</option>
												<option value="Béja">Béja</option>
												<option value="Ben Arous">Ben Arous</option>
												<option value="Bizerte">Bizerte</option>
												<option value="Gabès">Gabès</option>
												<option value="Gafsa">Gafsa</option>
												<option value="Jendouba">Jendouba</option>
												<option value="Kairouan">Kairouan</option>
												<option value="Kasserine">Kasserine</option>
												<option value="Kébili">Kébili</option>
												<option value="Le Kef">Le Kef</option>
												<option value="Mahdia">Mahdia</option>
												<option value="La Manouba">La Manouba</option>
												<option value="Médenine">Médenine</option>
												<option value="Monastir">Monastir</option>
												<option value="Nabeul">Nabeul</option>
												<option value="Sfax">Sfax</option>
												<option value="Sidi Bouzid">Sidi Bouzid</option>
												<option value="Siliana">Siliana</option>
												<option value="Sousse">Sousse</option>
												<option value="Tataouine">Tataouine</option>
												<option value="Tozeur">Tozeur</option>
												<option value="Tunis">Tunis</option>
												<option value="Zaghouan">Zaghouan</option>
											</select>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<select
												name="type"
												className="form-control"
												onChange={this.onChangeSearchTitle}
												required
												value={this.state.type}

											>
												<option>N'impote où</option>
												<option value="temps plein">Temps plein</option>
												<option value="demi journée">Demi journée</option>
											</select>
										</div>
										<div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
											<button
												type="button"
												onClick={this.getsearch}
												className="btn btn-primary btn-lg-0  mb-9 btn-block text-white btn-search"
											>
												<span className="icon-search icon mr-2" />Rechercher
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
        </div>
        <div className="intro-heading text-uppercase" style={{paddingTop : '136px'}}>REJOIGNEZ-NOUS MAINTENANT POUR LE MEILLEUR EMPLOI</div>
        <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Connecter-Vous</a>
      </div>
    </div>
  </header>
 
        );
    }
}

export default pichome;