import React from 'react'

import ucb from './../src/Assests/Images/ucb.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { facebook } from '@fortawesome/react-fontawesome'

function UCB() {
    return (
        <div>
            <h1 className="hed">UCB</h1>
            <FontAwesomeIcon icon={['fab', 'apple']} />
            <img src={ucb}  alt='' className='pic'/>
            <p className="par"> Benetton Group S.r.l. is a global fashion brand based in Ponzano Veneto, Italy founded in 1965.
                 Benetton Group has a network of about 5,000 stores worldwide.It is a wholly owned subsidiary of the Benetton family's holding company Edizione.</p>
        </div>
    )
}

export default UCB
