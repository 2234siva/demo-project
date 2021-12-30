import React, { Component } from 'react';



const empdata=[
    {id:234,name:"siva",email:"sivaawesome234@gmail.com"},
    {id:567,name:"sai",email:"saikrishna@gmail.com"},
    {id:789,name:"rohit",email:"rohitkumar258@gmail.com"}
]
class lifecycle extends Component {
    constructor(props) {
        super(props);
                  this.state={users:[]}
    }

    ownApiData=()=>{
    this.setState({users:empdata})}
    render() {
        return (<>
            <div className="p-5">
                 <h2>THIS IS LIFE CYCLE METHODS</h2> <button onClick={this.ownApiData}>Click</button>
                 
                     <table className="table table-dark w-75 mx-auto my-3">
                             <thead>
                                 <tr>
                                 <th>EMPID</th>
                                 <th>NAME</th>
                                 <th>EMAIL</th>
                                 </tr>
                             </thead>

                         <tbody>
                             {this.state.users.map( (res,index)=>{
                                 return(<tr>
                                         <td>{res.id}</td>
                                         <td>{res.name}</td>
                                         <td>{res.email}</td>
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
}

export default lifecycle;   