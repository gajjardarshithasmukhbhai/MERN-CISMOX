import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css'
import icon from './cismox_image/jlk.png';
import '../node_modules/font-awesome/css/font-awesome.min.css'
class Login extends React.Component{
	render()
	{
		return(
				<div>
					<div class="bg">
						<div class="container">
							<br/>

							<div class="col-sm-1 col-md-4 col-lg-0">
								
							</div>
							<div class="col-sm-10 col-md-4 col-lg-12">
								<div class="card mnb">
									<div class="card-header text-capitalize text-center"><b><i class="fa fa-users fa-2x" aria-hidden="true"></i></b>&nbsp;&nbsp;
										Mr.Darshit Gajjar(owner of cismox)
									</div>
									<div class="card-body ">
										<input type="text" class="username" placeholder="example@gmail.com" />
										<br/><br/>
										<input type="password" class="password"
									
										 placeholder="password"
										  />
										<br/>
										<br/>
										<br/>
										
										<button type="button" class="btn btn-block btn-success lead"><i class="fa fa-cogs fa-fw" aria-hidden="true"></i>
										&nbsp;&nbsp;<b>Login</b></button>
										<br/>
										<a class="forgot">forgot password?</a>
										<br/><br/>
										<button class="btn btn-block btn-danger">
											<i class="fa fa-google-plus fa-fw" aria-hidden="true"></i>
											&nbsp;&nbsp;
											<b>Login with Google+</b>
									</button>
										<img src={icon} class="img-fluid logo"/>
									</div>
									
								</div>
							</div>
							<div class="col-sm-1 col-md-4 col-lg-0"></div>
						</div>							
					</div>
				</div>
				);
	}
}
export default Login;  