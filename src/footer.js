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
class Footer  extends React.Component{
	render()
	{
		return(
				<div>
					<footer class="card-footer ipman bn ripple">
						<div class="container">

					<div class="row">
						<div class="col-lg-6"><br/>
                    		<h3 class="office text-left r">Office</h3>
                    		<p class="lead text-white text-capitalize"><b>>></b>E-204 vinod Tower,shrinath recendency<br/>pajarpol,kadi</p>
                            <p class="text ret"><b class="zoomw">>></b>phone number:7984552350</p>
						</div>
						<div class="col-lg-6">
						</div>
					</div>
					</div>
					</footer>	
				</div>
		);
	}
}
export default Footer