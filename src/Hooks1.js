import React,{useState} from 'react'

function Hooks1() {

    const [name,setName] = useState("Siva")
    const id = useState("234")
    const [user] = useState([1,"siva","sivaawesoe234@gmail.com","7013626346"])
    const [adress] = useState({location:'kakinada',state:'Andhra Prades',pincode:'533255'})

    const handleState=()=>{
       setName("siva2234")
    }
    return (
        <div className="container py-5">
            <h1 className="py-2">Hooks Concept</h1>
            <h4> {id}--{name}</h4>
            <h4>{user}</h4>
            {
              user.map( (res,index)=> <li> {res}</li>
            )
            }
            <br/><br/>
          <h3>{adress.location}</h3>
          <h3>{adress.state}</h3>
          <h3>{adress.pincode}</h3>

          <button onClick={handleState}>StateChanges</button>
        </div>
    )
}
export default Hooks1