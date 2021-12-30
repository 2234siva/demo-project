import React from 'react';

import Child from'./child.js'

function Parent()
 { 
return(
<>
<div className="bg-success text-white border text-center p-5 m-5"> 
        <h1>ParentComponent</h1>

        <Child/>
        </div>
        </> )
             }

export default Parent