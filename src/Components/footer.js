import React, { Component } from 'react';
import './footer.css'
class footer extends Component {
    render() {
        return (
            <footer id="footer" class="footer-1">
                <div class="mainn-footer widgets-dark typo-light">
                    <div class="container">
                        <div class="row">
              
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget subscribe no-box">
                                    <h5 class="widget-title">COMPANY NAME<span></span></h5>
                                    <p>About the company, little discription will goes here.. </p>
                                </div>
                            </div>
            
                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                <h5 class="widget-title">Quick Links<span></span></h5>
                              <ul class="thumbnail-widget">
                                <li>
                                    <div class="thumb-content"><a href="/">Get Started</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">Top Leaders</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">Success Stories</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">Event/Tickets</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">News</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">Lifestyle</a></div>	
                                </li>
                                <li>
                                    <div class="thumb-content"><a href="/">About</a></div>	
                                </li>
                              </ul>
                                </div>
                            </div>
            
            <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                    <h5 class="widget-title">Get Started<span></span></h5>
                    <p>Get access to your full Training and Marketing Suite.</p>
                    <a class="btn" href="/registerEm" >Register Now</a>
                </div>
            </div>
            
            <div class="col-xs-12 col-sm-6 col-md-3">
            
            <div class="widget no-box">
                <h5 class="widget-title">Contact Us<span></span></h5>
            
                <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p>
                <ul class="social-footer2">
                    <li class=""><a title="youtube" target="_blank" href="/"><img alt="youtube" width="30" height="30" src=""/></a></li>
                    <li class=""><a href="/" target="_blank" title="Facebook"><img alt="Facebook" width="30" height="30" src=""/></a></li>
                    <li class=""><a href="/" target="_blank" title="Twitter"><img alt="Twitter" width="30" height="30" src=""/></a></li>
                    <li class=""><a title="instagram" target="_blank" href="/"><img alt="instagram" width="30" height="30" src=""/></a></li>
                </ul>
            </div>
            </div>
            
            </div>
            </div>
            </div>
              
            <div class="footer-copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <p>Copyright Company Name © 2016. All rights reserved.</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        );
    }
}

export default footer;