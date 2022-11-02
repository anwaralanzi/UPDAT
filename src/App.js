import './App.css';
import React,{useEffect, useState} from 'react';
import axios from "axios";
import Creat2 from './component/Creat2';
import Post from './component/Post';
function App() {
//  const [stat, setState] = useState([])
//   useEffect(() => {
//     axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
//       console.log(res.data.results)
//       setState(res.data.results)
//     })


//   },[])

  return (
    <div className="App">
{/* {stat.map(item=>{
  return (
    <>
    <p>{item.name}</p><br></br>


<img src ={item.image}></img>
</>
  
  )
}
  )} */}

<Post></Post>

<Creat2/>


    </div>
  );
}

export default App;