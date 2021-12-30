import React, { Component } from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom'
var url=`http://localhost:2234/cricketrs`
class userdata extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
  
    

    

    
    render() {
        console.log(this.props.match.params.cricketrs)

        var{id, email, first_name, last_name, phone} = this.state
        return(
            <div>
              <h2>Selected Id Parameter For users only</h2>

              <table className ="w-25 mx-auto table table-bordered table-dark">
                  <tbody>
                      <tr>
                          <th>ID</th>
                          <td>{id}</td>
                      </tr>
                 
                      <tr>
                          <th>FIRSTNAME</th>
                          <td>{first_name}</td>
                      </tr>

                      <tr>
                          <th>LASTNAME</th>
                          <td>{last_name}</td>
                      </tr>

                      <tr>
                          <th>EMAIL</th>
                          <td>{email}</td>
                      </tr>

                      <tr>
                          <th>PHONE</th>
                          <td>{phone}</td>
                      </tr>

                      <tr>
                          <th><Link to={'/restapi'}>Go Back</Link></th>
                          <td>
                              <button onClick={()=>window.print()} className="btn btn-danger">print</button>
                              </td>
                      </tr>
                  </tbody>
              </table>
               
            </div>
        );
    }
    componentDidMount(){axios
        .get(`${url}/${this.props.match.params.users}`)
        .then((apiresult)=>this.setState(apiresult.data))

    }

}



export default userdata;