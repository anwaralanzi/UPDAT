import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'
function Post() {
     const [stat, setState] = useState([])
  useEffect(() => {
    axios.get("https://6362424766f75177ea2a992e.mockapi.io/todo").then((res) =>{
      console.log(res.data)
      setState(res.data)
    })


  },[])

  return (
    <div>
 {stat.map(item=>
    
    <p>{item.fName}</p>)}

      </div>
  )
}

export default Post