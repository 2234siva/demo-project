import React, { Component } from 'react';

import {connect} from 'react-redux'


class counter extends Component {
    constructor(props) {
        super(props);
       
    }
    incriment=()=>
    {
       // this.setState({count:this.state.count+1})
       this.props.dispatch({type:'incriment'})
    }

    decrement=()=>
    {
        // this.setState({count:this.state.count-1})
        this.props.dispatch({type:'decrement'})
    }
    
    render() {
        return (
            <div className='text-center'>
                <h3 className='py-5'>Counter Example</h3>

                <button onClick={this.incriment}>+</button> &nbsp;&nbsp;

                <span>{this.props.count}</span> &nbsp;&nbsp;

                <button onClick={this.decrement}>-</button>

            </div>
        );
    }
}

const mapstatetoProps=(state)=>
{
   return({
       count:state.ms
   })
}


export default connect(mapstatetoProps)(counter);