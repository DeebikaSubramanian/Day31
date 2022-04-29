import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import Usercontext from './usercontext';

function Teacherview() {
  const navigate=useNavigate();
  let params=useParams();
  const [teacher,setteacher]=useState({ })
  useEffect(async()=>
  {
const view=await axios.get(`https://624357603da3ac772b01a9e9.mockapi.io/teacher/${params.id}`)
setteacher(view.data)
  },[])
    
    // let userviewcontext=useContext(Usercontext)
  return (
      
    <div class="viewprofile"><h1 class="text-center" style={{color:"green"}}>Teacher Details</h1>
    <table class="table bordered">
        <thead class="tablehead">
            <tr>
                <td>Name</td>
                <td>Salary</td>
                <td>Subject</td>
                <td>Class</td>
                <td>Experience</td>
                
            </tr>
        </thead>
        <tbody class="tablebody">
            <td>{teacher.name}</td>
            <td>{teacher.salary}</td>
            <td>{teacher.subject}</td>
            <td>{teacher.class}</td>
            <td>{teacher.experience}</td>
                    </tbody>
     
    </table>
    <div class="text-center">
      <button class="btn-lg btn-bg-primary" onClick={()=>navigate('/teacher')}>Back</button></div></div>
    
  )
}

export default Teacherview;