import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

var url=`http://localhost:2234/cricketrs`
class restapi extends Component {
    constructor(props) {
        super(props);
        this.state={cricketrs:[]}

        console.log(props);
    }

    //read the data
     ReadApiData= async()=>
     {
        await axios.get(url)
        .then((apiresult)=>this.setState({cricketrs:apiresult.data}))
     }



    //deleteing the data
     HandlingDeleteData= async(id)=>
    {
        if(window.confirm (`Do You Want To Delete The${id} Data`));
    await axios.delete(`http://localhost:2234/cricketrs/${id}`);

            this.ReadApiData();
        
    }
   

    render(){
        return (
            <>
<div className="p-5">
                 <h2>Axios Rest Api Calls</h2> 
                 
                     <table className="table table-light w-85 mx-auto my-3">
                             <thead>
                                 <tr>
                                 <th>SNO</th>
                                 <th>FIRSTNAME</th>
                                 <th>LASTNAME</th>
                                 <th>EMAIL</th>
                                 <th>PHONE</th>
                                 <th>ACTIONS</th>
                                 </tr>
                             </thead>

                         <tbody className="table table-dark">
                             {this.state.cricketrs.map( (res, index)=>{
                                 return(<tr key={index}>
                                         <td>{index+1}</td>
                                         <td>{res.first_name}</td>
                                         <td>{res.last_name}</td>
                                         <td>{res.email}</td>
                                         <td>{res.phone}</td>
                                         <td><Link to ={`${this.props.match.path}/view/${res.id}`} className="btn btn-primary text-primary">View</Link></td>
                                         <td><Link to ={`${this.props.match.path}/Edit/${res.id}`}className="btn btn-warning text-warning">Edit</Link></td>
                                         <td> <button onClick={()=>this.HandlingDeleteData(res.id)} className="btn btn-danger text-danger">Delete</button></td>
                                     </tr>
                                 )
                             }
                             )
                             }

                             
                         </tbody>
                     </table>
                 
            </div>
         
            </>
        );
    }
    componentDidMount(){

                this.ReadApiData();

                     }
    
}



export default restapi;