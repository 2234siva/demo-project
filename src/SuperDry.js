import React from 'react'

import Superdry from './../src/Assests/Images/Superdry.jpg'

function SuperDry() {
    return (
        <div>
            <h1 className="hed">SuperDry</h1>
            <img src={Superdry}  alt='' className='pic'/>
            <p className="par"> Superdry plc (stylised as SUPERDRY®︎冒険魂) is a UK branded clothing company, and owner of the Superdry label. Superdry products combine vintage Americana styling with Japanese inspired graphics. It is listed on the London Stock Exchange.</p>
        </div>
    )
}

export default SuperDry
