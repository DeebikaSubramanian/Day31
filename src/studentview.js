import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Usercontext from './usercontext';
import { useNavigate } from 'react-router-dom';

function Studentview() {
  let navigate=useNavigate()
  let params=useParams();
  const [student,setstudent]=useState({ })
  useEffect(async()=>
  {
const view=await axios.get(`https://624357603da3ac772b01a9e9.mockapi.io/student/${params.id}`)
setstudent(view.data)
  },[])
    
    // let userviewcontext=useContext(Usercontext)
  return (
      
    <div class="viewprofile"><h1 class="text-center" style={{color:"green"}}>Student Details</h1>
    <table class="table bordered">
        <thead class="tablehead">
            <tr>
                <td>Name</td>
                <td>Mark</td>
                <td>Age</td>
                <td>Class</td>
                
            </tr>
        </thead>
        <tbody class="tablebody">
            <td>{student.name}</td>
            <td>{student.mark}</td>
            <td>{student.age}</td>
            <td>{student.class}</td>
                    </tbody>
     
    </table>
    <div class="text-center">
    <button class="btn-lg btn-bg-primary" onClick={()=>navigate('/student')}>Back</button>
    </div>
    </div>
    
  )
}

export default Studentview;