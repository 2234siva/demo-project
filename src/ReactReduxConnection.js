import React, { Component } from 'react';

import {connect} from 'react-redux'

import {bindActionCreators} from 'redux'

import EmpActions from '././Action/index.js'



class ReactReduxConnection extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.EmpActions();
                        }
    
    render() {
        return (
            <>
                {
                    this.props.empdata.map((res,index)=>{
                        return (<ul key={index}>
                            <li>{res.id}</li>
                            <li>{res.name}</li>
                            <li>{res.email}</li>
                            <li>{res.phone}</li>
                        </ul>)
                    }
                    
                    )
                }
            </>
        );
    }
}
const mapStateToProps=(state)=>
{
console.log(state)

return(
    {empdata:state.workreducer})
}
const mapDispatchToProps=(dispatch)=> 
{
return bindActionCreators({EmpActions},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ReactReduxConnection);