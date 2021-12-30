import React,{Component} from'react'


class Services extends Component {
constructor(props) {
    super();

    this.state={
        count:0,
        email:'', 
}
   this.stateChanges = ()=>{
    this.setState({
    email:'Awesome',
    count:this.state.count +1})
    }
}
render() {
    return(<><div className='p-5'>
        Name:{this.state.email}<br/>
        Cart: {this.state.count}<br/><br/>
        <button onClick={this.stateChanges}>Hitme</button>
        </div> </>)}
}
export default Services 