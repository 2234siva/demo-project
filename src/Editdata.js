import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class Editdata extends Component {
  constructor(props) {
    super(props);
   this.state= {
      first_name:"",
      last_name:"",
      email:"",
      phone:""
   }
  }

          
               //input firstname
               HandleFirstNameInput=(mst)=>
               {
                 this.setState({first_name:mst.target.value});
               }
         
                //input lastname
                  HandleLastNameInput=(mst)=>
                  {
                   this.setState({last_name:mst.target.value});
                  }
         
               //input email
                HandleEmailInput=(mst)=>
                {
                  this.setState({email:mst.target.value});
                }
         
               //input phone
               HandlePhoneInput=(mst)=>
               {
                 this.setState({phone:mst.target.value});
               }
         
               //Submitform
              HanleSubmitForm=(mst)=>
              {
                mst.preventDefault();
                const formdata={
               'first_name':this.state.first_name,
               'last_name':this.state.last_name,
               'email':this.state.email,
               'phone':this.state.phone
                }
                 // alert(JSON.stringify(formdata))
         
                 axios.put(`http://localhost:2234/cricketrs/${this.props.match.params.users}`,formdata)
                 .then(()=>this.props.history.push('/restapi') )}
 

  componentDidMount() {axios
    .get(`http://localhost:2234/cricketrs/${this.props.match.params.users}`)
    .then((apiresult)=>this.setState(apiresult.data))

  }

 
  render() {
    return (
      <div>
<div className="container w-50 p-5">

  <h2 className="text-center py-2">Edit User form Data </h2>
            <form onSubmit={this.HanleSubmitForm.bind(this)}>

     <div className="form-group">
    <label>FirstName</label>
    <input type="Name" 
    className="form-control" value={this.state.first_name} 
     onChange = {this.HandleFirstNameInput.bind(this)}/>
     </div>
  

     <div className="form-group">
    <label>LastName</label>
    <input type="text" 
    className="form-control" value={this.state.last_name} 
     onChange = {this.HandleLastNameInput.bind(this)}/>
     </div>

     <div className="form-group">
    <label>Email</label>
    <input type="email" 
    className="form-control" value={this.state.email} 
     onChange = {this.HandleEmailInput.bind(this)}/>
    
     </div>

     <div className="form-group">
    <label>phone</label>
    <input type="number" 
    className="form-control" value={this.state.phone} 
     onChange = {this.HandlePhoneInput.bind(this)}/>
    
     </div>

     <button 
      type="submit"
     className ="btn btn-primary"
     onClick={this.HanleSubmitForm}>Update</button>&nbsp;&nbsp;&nbsp;

 <Link to={'/restapi'} className ="btn btn-primary">Go Back</Link>
     </form>
     
            </div>
            
      </div>
    );
  }
}


export default Editdata;
