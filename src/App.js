import React from'react'

import {BrowserRouter,Route,} from 'react-router-dom'

import Navbar from './Navbar.js'

import Home from './Home.js'    

import About from './About.js'

import Services from './Services.js'

import Contact from './Contact.js'

import Footer from './Footer'

import Fashion from './Fashion.js'

import lifecycle from './lifecycle.js'

import restapi from './restapi.js'

import userdata from './userdata.js'
 
import Editdata from './Editdata.js'

import Signup from './Signup.js'

import Hooks1 from './Hooks1.js'

import HooksApi from './HooksApi.js'

import ReactReduxConnection from './ReactReduxConnection.js'

function App()
 {
return(


<BrowserRouter>

<Route path ="/" component={Navbar}/>
<Route path ="/Navbar" component={Navbar}/>
<Route path ="/Home" component={Home}/>
<Route path ="/About" component={About}/>
<Route path ="/Services" component={Services}/>
<Route path ="/Fashion" component={Fashion}/>
<Route path ="/Hooks1" component={Hooks1}/>
<Route path ="/HooksApi" component={HooksApi}/>
<Route path ="/lifecycle" component={lifecycle}/>
<Route exact path ="/Signup" component={Signup}/>
<Route path ="/ReactReduxConnection" component={ReactReduxConnection}/>
<Route exact path ="/restapi" component={restapi}/>
<Route exact path ="/restapi/view/:users" component={userdata}/>
<Route exact path ="/Contact" component={Contact}/>
<Route exact path ="/restapi/Edit/:users" component={Editdata}/>
<Footer/>
{/*
<Link to="/Home">Home</Link>
<Link to="/About">About</Link>
<Link to="/Services">Services</Link>
<Link to="/Contact">Contact</Link>
*/}
</BrowserRouter>

 )
        }

export default App