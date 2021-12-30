import React from 'react'

import gas from './../src/Assests/Images/gas.png'

function Gas() {
    return (
        <div>
           <h1 className="hed"> Gas</h1>
           <img src={gas}  alt='' className='pic'/>
           <p className="par">Gas Jeans (S.p.A.), sometimes stylized as GAS, is a leading premium apparel and denim brand 
               owned by Grotto S.p.A., run by the Grotto family in Italy. 
               The company was founded by Claudio Grotto in the early 1970s. Today,
                it operates in more than 56 countries, with more than 3,000 stores.

GAS targets its products at the youth segment. The brand is known in both the Italian fashion and worldwide 
fashion scenes to be simple, original and versatile</p>
        </div>
    )
}

export default Gas
