import React from 'react'
import ReactDOM from 'react-dom'
import icon from './cismox_image/jlk.png';
import icon1 from './cismox_image/icon1.png';
import icon2 from './cismox_image/icon2.png';
import icon3 from './cismox_image/icon3.png';
import web from './cismox_image/web.png';
import android from './cismox_image/android.png';
import designing from './cismox_image/designing.png';
import KDLKLD from './cismox_image/KDLKLD.png';
import dll from './cismox_image/dll.png';
import SEO from './cismox_image/SEO.png';
import github from './cismox_image/github.png';
import gmaiil from './cismox_image/gmaiil.png';
import youtubeheb from './cismox_image/youtubeheb.png';
import link from './cismox_image/link.png';
import  'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import node from './cismox_image/Group 1.png'
import react from './cismox_image/React_log.png'
import MongoDB from './cismox_image/MongoDB.jpg'
import js from './cismox_image/js.png'
import reactnative from './cismox_image/reactnative.png'
import technology from './cismox_image/technology.png';
import './cismox.css';
import './cismox1.css';
import './cismmox2.css';
import './cimsox_upper.css';
import './text.css'
import './button.css'
import './images.css'
import './tooltip-popover'
class Navbar extends React.Component{
    render()
    {
        return(
        <div>
               <nav class="navbar navbar-expand-sm navbar-default bg-white navbar-light nav-tabs fixed-top">
                        <a href="" class="navbar-brand"><span class="font">cismox</span></a>
                        <button class="navbar-toggler" data-toggle="collapse" data-target="#cl" >
                            <span class="navbar-toggler-icon navbar-toggler-left active" data-toggle="tooltip" data-title="Menu" data-placement="bottom"></span>
                        </button>
                        <div class="collapse navbar-collapse text-center" id="cl">
                            <span class="mr-auto"></span>
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a href="#" class="lead text-white btn btn-primary text-capitalize nav-link"><b><span class="glyphicon glyphicon-user"></span>login</b></a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="lead btn text-capitalize nav-link"><b>signup</b></a>
                                </li>
                                
                            </ul>
                        </div>
                    </nav>
                <div class="jumbotron jumbotron-fluid lmdk">
                    <br/><br/><br/><br/>
                    <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                         <h1 class="dser text-white lead text-capitalize"><b>&nbsp; &nbsp;why cismox not other?</b></h1>
                         <br/>
                         <br/>
                         
                         <img src={icon1} class="icon2 wow zoomIn" data-toggle="tooltip" data-title="our company make the cheaper price website" data-placement="bottom" /><span class="span" data-target="#pp" data-toggle="collapse">client make website static or dynamic cheapest price</span><br/><br/><br/>
                        
                       
                                <p class="alert alert-danger col-sm float-sm-left  header1 collapse w-25" id="pp">
                                    (i)static  5,000/- to 10,000/-
                                       <br/>
                                       <br/>

                                    (ii)dynamic 15,000/- to 50,000/-
                                </p>
                        
                                                        
                         <img src={icon2} class="icon2 wow zoomIn" data-toggle="tooltip" data-title="cismox give the mantainace service" data-placement="bottom"/><span class="span">cismox give 2 month mantainace after delievry website to client</span>
                         <br/><br/><br/>

                         <img src={icon3} class="icon2 wow zoomIn" data-toggle="tooltip" data-title="our helpline 24 X 7 run" data-placement="bottom"/><span class="span">24 X 7 customer support</span>
                    </div>
                </div>

 
                <Image/>
            </div>
                );
    }
}

class Image extends React.Component{
    render()
    {
        return(
                <div>
                    <div class="container">
                        <div class="row">
                                    <div class="col-lg-4 col-md-12 col-sm-12">
                                        <div class="card-body">
                                            <img src={web} class="img-fluid d-block mx-auto img1"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Our Company Making the Website Like Static and Dynamic both will be Making</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div class="col-lg-4 col-md-12 col-sm-12">
                                        <br/><br/>
                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                       <div class="card-body">
                                            <img src={android} class="img-fluid d-block mx-auto img2"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Our Company Making ANDROID App shortly show We take project very shoon</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12 col-sm-12">
                                        <br/><br/>
                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                       <div class="card-body">
                                            <img src={designing} class="img-fluid d-block mx-auto img2"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Our Company Making the Website Design for Client Requirement
                                                use the adobe xd and photoshop</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>
                                    </div>
                                    </div>

                                    <div class="col-lg-4 col-md-12 col-sm-12">
                                        <br/><br/>
                                        <div class="col-lg-3 col-md-3 col-sm-12">
                                          <div class="card-body">
                                            <img src={KDLKLD} class="img-fluid d-block mx-auto img2"/>
                                            <br/>
                                            <p class="lead text-center text-capitalize shadow-lg p-4 mb-4 bg-white">
                                                <b>Company staring new working domain it's IOT.we start new business coming soon</b>
                                            </p>
                                            <br/>
                                            <button class="btn de1 ripple">
                                              <span class="glyphicon glyphicon-ok tree"></span>  click
                                            </button>
                                        </div>  
                                        </div>
                                    </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>
                    <p class="lead text-capatilize text-center"><b> OUR SERVICES ARE DRIVEN BY AMAZING TECHNOLOGIES</b></p>
                    <Icon/>
                </div>
                            );
    }
}
class Icon extends React.Component{
    render()
    {
        return(
                <div>
                <div class="container">
                    <div class="row">

                        <div class="col-md-4">
                            <img src={node} class="node"/>
                        </div>
                        <div class="col-md-4">
                            <img src={react} class="react"/>
                        </div>
                        <div class="col-md-4">
                            <img src={js} class="js"/>
                        </div>
                    </div>
                    </div>
                    <div class="container">
                     <div class="row">
                         <div class="col-md-4 col-sm-6">
                            <img src={MongoDB} class="mongo"/>
                          </div>
                          
                          <div class="col-md-4 col-sm-6">
                            <img src={reactnative} class="native"/>
                          </div>
                     </div>
                     
                    <p class="text-capatilize text-center paragraph">Additionally, we build software using: ES6, Redux, Express, Typescript,php,Bootstrap 4,CMS,WORDPRESS,json,RestApi, Gitlab,Firebase,My-SQL</p>
                    </div>


                </div>
        );
    }
}
ReactDOM.render(<Navbar/>,document.getElementById("root"))  