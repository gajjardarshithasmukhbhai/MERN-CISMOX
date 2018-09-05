import React from 'react'
import ReactDOM from 'react-dom'
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.css'
import icon from './cismox_image/jlk.png';
import '../node_modules/font-awesome/css/font-awesome.min.css'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Login extends React.Component{
constructor()
{
	super();
	this.state={
		email:"",
		password:"",
		button:"",
	}
	this.email=this.email.bind(this);
}
email=(event)=>{
	this.setState({
		email:event.target.value,
		button:"gajjar",
	})
}
password=(eve)=>{
	this.setState({
		password:eve.target.value,
	})
}
	render()
	{ 
		return(
				<div>
					<div class="bg">
						<div class="container">
							<br/>
							<div class="col-sm-0 col-md-4 col-lg-0">
								
							</div>
							<div class="col-sm-12 col-md-4 col-lg-12">
								<div class="card mnb">
									<div class="card-header text-capitalize text-center"><b><i class="fa fa-users fa-2x" aria-hidden="true"></i></b>&nbsp;&nbsp;
										Mr.Darshit Gajjar(owner of cismox)
									</div>
									<div class="card-body ">
									<form>
										<input type="text" value={this.state.email} onChange={this.email} class="username" placeholder="example@gmail.com" />
										<br/><br/>
										<input type="password" value={this.state.password} onChange={this.password} class="password" id="password"
									
										 placeholder="password"
										  />
										<br/>
										<br/>
										<br/>
										
										<button type="button" value={this.state.button} disabled={(this.state.email.length&&this.state.password.length)?false:true} onClick={this.active}class="btn btn-block btn-success lead"><i class="fa fa-cogs fa-fw" aria-hidden="true"></i>
										&nbsp;&nbsp;<b>Login</b></button>
										<br/>
										<a class="forgot">forgot password?</a>
										<br/>


										<br/>
										
										<img src={icon} class="img-fluid logo"/>
									</form>
									</div>
								<Link to="/" class="btn btn-info click"><i class="fa fa-chevron-left"></i>&nbsp;&nbsp;Back</Link>
									
								</div>


							</div>
							<div class="col-sm-0 col-md-4 col-lg-0"></div>
						</div>							
					</div>
				</div>
				);
	}
}
export default Login;  