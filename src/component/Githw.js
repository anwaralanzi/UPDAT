import React from 'react'
import axios from 'axios'
import{useEffect ,useState}from 'react'
import { useNavigate } from "react-router-dom";
import Creat2 from "./Creat2"
import { Link } from 'react-router-dom'

function Githw() {

     const [stat, setState] = useState([])
  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
   
    console.log(res.data.results)
      setState(res.data.results)

  })

  },[])


  const onDelet = (id) =>{ 
    axios.delete(`https://6362424766f75177ea2a992e.mockapi.io/todo/${id}`).then(res=>{
        setState(stat.filter(del=>{return del.id != id}))
  
    })



}
  return (
    <div className='git'>
 {stat.map(data=>{   

  return (
    
    <>
    <img src ={data.image}></img>
    <button onClick={()=> onDelet(data.id)}>delete</button>
    

    <button onClick={Creat2} >update</button>

    <p>{data.name}</p>


    {/* <img src ={item.Poster}></img> */}

</>
  
  )
}
  )} 


    </div>
  )
}

export default Githw