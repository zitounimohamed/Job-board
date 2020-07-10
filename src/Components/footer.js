import React, { Component } from 'react';
import './footer.css'
import logo from '../assets/img/logo.png'
class footer extends Component {
    render() {
        return (
            <footer id="footer" className="footer-1">
                <div className="mainn-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">
              
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget subscribe no-box">
                                    <h5 className="widget-title"><img  className= 'logo'src={logo} alt=''></img>TunWorks<span></span></h5>
                                    
                                </div>
                            </div>
            
                            <div className="col-xs-12 col-sm-6 col-md-3">
                                <div className="widget no-box">
                                <h5 className="widget-title">Liens Rapides<span></span></h5>
                              <ul className="thumbnail-widget">
                                <li>
                                    <div className="thumb-content"><a href="/loginEm">Connectez-vous</a></div>	
                                </li>
                                <li>
                                    <div className="thumb-content"><a href="/">Offres Emplois</a></div>	
                                </li>
                                <li>
                                    <div className="thumb-content"><a href="/">Formations</a></div>	
                                </li>
                                
                              </ul>
                                </div>
                            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                    <h5 className="widget-title">Connectez-Vous<span></span></h5>
                    <p>Rejoignez-nous pour meilleur offre d'emploi.</p>
                    <a className="btn mt-3" href="/registerEm" >Connectez Vous</a>
                </div>
            </div>
            
            <div className="col-xs-12 col-sm-6 col-md-3">
            
            <div className="widget no-box">
                <h5 className="widget-title">Contacter Nous<span></span></h5>
            
                <p><a href="mailto:info@domain.com" title="glorythemes">hammazitouni77@gmail.com</a></p>
                <ul className="social-footer2">
                    <li className=""><a href="/www.facebook.com/zitouni.hamma" target="_blank" title="Facebook"><i className='fa fa-facebook'></i></a></li>
                    <li className=""><a title="instagram" target="_blank" href="/www.instagram.com/hamma_zitouni/"><i className='fa fa-instagram'></i></a></li>
                </ul>
            </div>
            </div>
            
            </div>
            </div>
            </div>
              
            <div className="footer-copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>Copyright TunWorks © 2020. All rights reserved.</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        );
    }
}

export default footer;