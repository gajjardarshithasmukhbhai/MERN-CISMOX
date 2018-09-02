import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './cismox.css';
import './cismox1.css';
import './cismmox2.css';
import './cimsox_upper.css';
import './text.css'
import './button.css'
import './images.css'
import github from './cismox_image/github.png';
import gmail from './cismox_image/gmaiil.png';
import youtube from './cismox_image/youtubeheb.png';
import linkedin from './cismox_image/link.png';
import '../node_modules/font-awesome/css/font-awesome.min.css'

class Footer  extends React.Component{
	render()
	{
		return(
				<div>
					<footer class="card-footer ipman bn ripple">
						<div class="container">

					<div class="row">
						<div class="col-lg-4 col-sm-4 col-md-4"><br/>
                    		<h3 class="office text-left r">Office</h3>
                    		<p class="lead text-white text-capitalize"><b><i class="fa fa-arrow-right fa-fw" aria-hidden="true"></i></b>E-204 vinod Tower,shrinath recendency<br/>pajarpol,kadi</p>
                            <p class="lead text-white text-capitalize"><b><i class="fa fa-arrow-right fa-fw" aria-hidden="true"></i></b>phone number:7984552350</p>
						</div>
						<div class="col-lg-4 col-sm-4 col-md-4"><br/>
						</div>
						<div class="col-lg-4 col-sm-4 col-md-4">
						<br/><h3 class="office">Book your project</h3>
                    <p class="lead text-white text-capitalize"><b><i class="fa fa-arrow-right fa-fw" aria-hidden="true"></i></b>booking your project you give the 20% advanced given<br/>then after your project start</p>
                    
                     <button type="button" class="project smn1 ripple"><b><i class="fa fa-chrome fa-fw" aria-hidden="true"></i>&nbsp;&nbsp;Project</b></button>
                </div>
						</div>
					</div>
					<br/>
					<div class="container">
						<div class="row">
							<div class="col-lg-4 col-sm-4 col-md-4">
								<h3 class="office"> Support & feedback</h3>
								<p class="lead text-white text-capitalize"><b><i class="fa fa-arrow-right fa-fw" aria-hidden="true"></i></b>you can send feedback and get support via email and otherwise contact our customer care</p>
							</div>
							<div class="col-lg-4 col-md-4 "></div>
							<div class="col-lg-4 col-sm-8 col-md-4"><br/>
                    			 <h3 class="office">E-mail</h3>			
								 <p class="text jk">cismox.code@gmail.com</p>
							</div>
						</div>
					</div>
					<br/>
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-sm-6 col-6">
								<p class="lop"><img src={github} width="38px" height="38px" class="zoom"/><b>&nbsp;&nbsp;&nbsp;Github</b></p>
							</div>
							<div class="col-lg-3 col-sm-6 col-6">
								<p class="lop"><img src={youtube}  width="38px" height="38px" class="zoom"/>&nbsp;&nbsp;&nbsp;<b>youtube</b></p>
							</div>
							<div class="col-lg-3 col-sm-6 col-6">
								<p class="lop"><img src={gmail}  width="38px" height="38px" class="zoom"/>&nbsp;&nbsp;&nbsp;<b>Email-id</b></p>
							</div>
							<div class="col-lg-3 col-sm-6 col-6">
								<p class="lop"><img src={linkedin}  width="38px" height="38px" class="zoom"/>&nbsp;&nbsp;&nbsp;<b>LinkedIn</b></p>
							</div>
						</div>
					</div>
					<br/>
					<br/>
					<div class="container">
						<div class="row">
							<div class="col-lg-12 col-sm-12 d-block m-auto">
								<h3 class="lk">copyright 2018|all right reserved</h3>
							</div>
						</div>
					</div>
					</footer>	
				</div>
		);
	}
}
export default Footer