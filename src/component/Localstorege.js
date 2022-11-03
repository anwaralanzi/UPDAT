import React, { useRef } from 'react'

function Localstorege() {
const data = useRef()
 const handelclick = ()=>{
    console.log(data.current.value,'initial value')
    localStorage.setItem("inputvalue",data.current.value)
 }  
 console.log(localStorage.getItem('inputvalue',"****")) 
  return (
    <div>
<input ref={data}></input>
<button onClick={handelclick}>Add to local storege</button>

    </div>
  )
}

export default Localstorege