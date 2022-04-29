import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import {useEffect } from 'react';

function Studentdelete() {
    const params=useParams();
    console.log(params.id)
  return(
         useEffect(async()=>
  {
await axios.delete(`https://624357603da3ac772b01a9e9.mockapi.io/student/${params.id}`)
alert("Deleted")
  },[])
        
  )   
}

export default Studentdelete;