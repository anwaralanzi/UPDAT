import React from 'react'
import axios from 'axios'
import {useEffect,useState}from 'react'

function postgit() {
 const [stat, setState] = useState([])
  useEffect(() => {
    axios.get("https://6362424766f75177ea2a992e.mockapi.io/todo").then((res) =>{
      console.log(res)
      setState(res)
    })





  return (
    <div>
        {stat.map(item=>{
  return (
    <>
    <p>{res}</p>
    <br></br>


{/* <img src ={item.image}></img> */}
</>
  
  )
}
  )}

    </div>
  )
}

}


export default postgit;