import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";
import {useNavigate}from 'react-router-dom'
import Na from './Na';
import Githw from './Githw';
import Localstorege from './Localstorege';
function Create () {
   const [fName, setfName] = useState()
   const [lName, setlName] = useState()
   let url = "https://6362424766f75177ea2a992e.mockapi.io/todo"
   const navigate = useNavigate();

   const postData = () => {
    axios.post(url,{
        fName,
        lName
    }).then(res =>{
        console.log(res)
    })
    navigate('Githw')

   }


function storege (){
    navigate('Localstorege')
}


  return (

    <div className='Creat'>
        <input  placeholder='Email' onChange ={e =>{ setfName(e.target.value)}}></input><br></br><br></br>
        <input placeholder='Password' onChange ={e =>{ setlName(e.target.value)}}></input>
        <br></br>        <br></br>
        

        <button onClick={()=>
        {postData()
        // Click()
     }} > LogIn</button>
        {/* <button onClick={this.Githw.postData}>Click</button> */}


    </div>
  )
}

export default Create