// import React from 'react'
import { useFormik } from 'formik'
import Usercontext from './usercontext';
import React, { useContext, useEffect } from 'react';

   
    import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Teacheredit() {
const navigate=useNavigate();
const profilecontext=useContext(Usercontext)
let params=useParams();
  const validate = values => {
    const errors = {};
    if (!values.name) {
      errors.name= 'Name cannot be empty';
    }
    if(!values.salary)
    errors.salary="salary cannot be empty";
          
        if(!values.subject)
        errors.subject="subject cannot be empty"
        if(!values.class)
        errors.class="class cannot be empty"
        if(!values.experience)
        errors.experience="experience cannot be empty"
        return errors;
        }
      
      let formik = useFormik({
        initialValues: {
          name:"",
          salary:0,
          subject:"",
          class:"",
          experience:""
          
          
        },
        validate,
         onSubmit: async(values) => {
              
                await axios.put(`https://624357603da3ac772b01a9e9.mockapi.io/teacher/${params.id}`,values)
                navigate('/teacher')
                        
        },
        }
      )
      useEffect(async()=>
      {
          try{
          const teacher=await axios.get(`https://624357603da3ac772b01a9e9.mockapi.io/teacher/${params.id}`)
          formik.setValues(teacher.data)
          }
          catch(error)
          {
              console.log(error)
          }
      },[])
    
      return (
        <div class="container"><h2 class="text-primary fs-1 text-center fw-bolder">Enter the Fields</h2>
          <form onSubmit={formik.handleSubmit}>
          
            <div class="row">
    <div class="col-12">
              <label>Name:</label>
              <input class="form-control" type={"text"} Placeholder="Enter the Name" 
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                style={{border:formik.errors.name?"solid 1px red":"solid 1px green"}}/>
                <span style={{color:"red"}}>
                {formik.errors.name?<div>{formik.errors.name}</div>:""}</span>
                        </div></div>
                        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Salary:</label>
              <input class="form-control" type={"text"} Placeholder="Enter your Salary" 
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
                style={{border:formik.errors.salary?"solid 1px red":"solid 1px green"}}/>
               <span style={{color:"red"}}>
                {formik.errors.salary?<div>{formik.errors.salary}</div>:""}</span>
                
            </div>
            </div>
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Subject:</label>
              <input class="form-control" type={"text"} Placeholder="Enter your Subject" 
                name="subject"
                onChange={formik.handleChange}
                value={formik.values.subject}
                style={{border:formik.errors.subject?"solid 1px red":"solid 1px green"}}/>
               <span style={{color:"red"}}>
                {formik.errors.subject?<div>{formik.errors.subject}</div>:""}</span>
                
            </div>
            </div>

            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Class:</label>
              <input class="form-control" type={"text"} Placeholder="Enter your Class" 
                name="class"
                onChange={formik.handleChange}
                value={formik.values.class}
                style={{border:formik.errors.class?"solid 1px red":"solid 1px green"}}/>
               <span style={{color:"red"}}>
                {formik.errors.class?<div>{formik.errors.class}</div>:""}</span>
                
            </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <label>Experience:</label>
              <input class="form-control" type={"text"} Placeholder="Enter your Experience" 
                name="experience"
                onChange={formik.handleChange}
                value={formik.values.experience}
                style={{border:formik.errors.experience?"solid 1px red":"solid 1px green"}}/>
                <span style={{color:"red"}}>
                {formik.errors.experience?<div>{formik.errors.experience}</div>:""}</span>
                </div>
            </div>
            
            
            
            <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div class="text-center">
                <input type="submit" disabled={Object.keys(formik.errors).length!==0} class="btn btn-primary"/></div>
                </div>
            </div>
                  </form>
          </div>
      )
    }
    
    export default Teacheredit;
    