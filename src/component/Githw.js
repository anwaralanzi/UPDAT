import React from 'react'
import axios from 'axios'
import{useEffect ,useState}from 'react'
// import { useNavigate } from "react-router-dom";

function Githw() {

     const [stat, setState] = useState([])
  useEffect(() => {
    axios.get("http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb").then((res) =>{
      console.log(res.data.Search)
      setState(res.data.Search)
    })


  },[])

  return (
    <div className='git'>
 {stat.map(item=>{
  return (
    <>
    <img src ={item.Poster}></img>

    <p>{item.Title}</p>
    <p>{item.Type}</p>
    <p>{item.Year}</p>

    <p>{item.imdbID}</p>

    {/* <img src ={item.Poster}></img> */}

</>
  
  )
}
  )} 


    </div>
  )
}

export default Githw