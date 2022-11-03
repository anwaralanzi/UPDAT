import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Creat2 from './component/Creat2';
import Githw from './Githw';
import Localstorege from './Localstorege';
// import Localstorege from './Localstorege';
import Update from './Update';
export default function Na() {
  return (
<>
    <div/>
    
    <Routes>


{/* <Route path ="Craet2" element = {<Creat2/>}></Route> */}
<Route path ="Localstorage" element = {<Localstorege/>}></Route>
<Route path ="Update" element = {<Update/>}></Route>
<Route path ="Githw" element = {<Githw/>}></Route>


</Routes>
</>
    
  )
}
