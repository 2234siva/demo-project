import React from'react'

import ReactTwo from './../src/Assests/Images/ReactTwo.png'

function About()
{
    return( 
    <div>
        <h1 className='hed'> About Component</h1>
        
        <img src={ReactTwo} alt='' className='pic'/>


    </div>)
}

export default About