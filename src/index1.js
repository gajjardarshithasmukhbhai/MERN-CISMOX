import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import dll from './cismox_image/dll.png';
import SEO from './cismox_image/SEO.png';
import technology from './cismox_image/technology.png';
import './cismox.css';
import './cismox1.css';
import './cismmox2.css';
import './cimsox_upper.css';
import './text.css'
import './button.css'
import './images.css'
class Click extends React.Component{
	render()
	{
		return(
				<div>
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-12 col-sm-12">
                                        <div class="card-body">
                                            <img src={dll} class="img-fluid d-block mx-auto img1"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Our Company solve the web Bug and penetration testing your website any firm interested contact our company</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>
                                    </div>
						</div>
					</div>	
					<br/><br/>
					<Seo/>		
				</div>
				);
	}
}
class Seo extends React.Component{
	render()
	{
		return(
				<div>
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-12 col-sm-12">
                                        <div class="card-body">
                                            <img src={SEO} class="img-fluid d-block mx-auto img1"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Our Company give SEO services.new client give free advice then after 1 year take charge</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>
                                    </div>
						</div>
					</div>	
					<br/><br/>
					<Technology/>
				</div>
		);
	}
}
class Technology extends React.Component{
	render()
	{
		return(
				<div>
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-md-12 col-sm-12">
                                        <div class="card-body">
                                            <img src={technology} class="img-fluid d-block mx-auto img1"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>user privacy and security our main priority.so we give one functionality is end to end encryption.so hacker never stolen your sensitive data</b>
                                            </p>
                                            <br/>
                                        </div>
                                    </div>
						</div>
					</div>
				</div>
		);
	}
}
export default Click;  		