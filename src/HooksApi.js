import React,{useEffect,useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

const HooksApi = (props) =>
{ 
    const [cricketrs, setCricketrs]=useState([]);

    useEffect(async ()=>
    {
       await axios.get('http://localhost:2234/cricketrs')
       .then( (apiresult)=>setCricketrs(apiresult.data))
    },[])

    return (
        <div className="p-5">
            <h3>Hooks Use Effect</h3>

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
                             {cricketrs.map( (res, index)=>{
                                 return(<tr key={index}>
                                         <td>{index+1}</td>
                                         <td>{res.first_name}</td>
                                         <td>{res.last_name}</td>
                                         <td>{res.email}</td>
                                         <td>{res.phone}</td>
                                         <td><Link to ={`HooksApi/view/${res.id}`} className="btn btn-primary text-primary">View</Link></td>
                                         <td><Link to ={`HooksApi/Edit/${res.id}`}className="btn btn-warning text-warning">Edit</Link></td>
                                         <td> <button onClick={()=>this.HandlingDeleteData(res.id)} className="btn btn-danger text-danger">Delete</button></td>
                                     </tr>
                                 )
                             }
                             )
                             }

                             
                         </tbody>
                     </table>
        </div>
    )
}
export default HooksApi