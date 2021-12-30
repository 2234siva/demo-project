import React from 'react'

import Allensolly from './../src/Assests/Images/Allensolly.jpg'

function AllenSolly() {
    return (
        <div>
            <h1 className="hed">Allen Solly</h1>

            <img src={Allensolly}  alt='' className='pic'/>
            <p className="par"> Allen Solly is a brand inspiring the birth of an entirely new consumer class.
                 Launched in India in 1993, its edgy positioning, smart communication and great fashion created the
                  'smart casuals' category in India. A quintessential British Brand, Allen Solly was launched in 
                  India by Madura Fashion & Lifestyle A Division of Aditya Birla Fashion & Retail Limited.
                  Allen Solly is among the topmost brands in India and it scored the
                 highest amidst all brands in its segment by the Economic Times Brand Equity survey.</p>
        </div>
    )
}

export default AllenSolly
