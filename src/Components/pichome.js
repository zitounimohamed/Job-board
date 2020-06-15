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
               <form className="search-jobs-form ">
              <div className="row mb-5">
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <input type="text" className="form-control form-control-lg-0" placeholder="Titre emploi, clé..."/>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <select className="form-control">
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
                  <select className="form-control">
                    <option>Part Time</option>
                    <option>Full Time</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <button type="submit" className="btn btn-primary btn-lg-0  mb-9 btn-block text-white btn-search"><span className="icon-search icon mr-2"></span>Search Job</button>
                </div>
              </div>
            </form>
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