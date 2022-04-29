import React, { useContext } from 'react'
import { useFormik } from 'formik'
import Usercontext from './usercontext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Studentform() {

const usercontext=useContext(Usercontext)
const navigate=useNavigate()
  const validate = values => {
    
    const errors = {};
    if (!values.name) {
      errors.name= 'Name cannot be empty';
    }
    if(!values.age)
    errors.salary="age cannot be empty"
    if(!values.class||values.class>12)
    errors.class="class cannot be empty and should be lesser than 13"
    if(!values.mark||values.mark>100)
    errors.mark="mark cannot be empty and should be less than or equal to 100"
    return errors;
    }
  
  let formik = useFormik({
    initialValues: {
      name:"",
      mark:"",
      age: 0,
      class:"",
      
      
    },
    validate,
     onSubmit: async(values) => {
          try{
            await axios.post("https://624357603da3ac772b01a9e9.mockapi.io/student",values)
            usercontext.setcreateform([...usercontext.createform,values])
            navigate('/student')
          }
          catch(error)
          {
            console.log(error)
          }

       
    },
    }
  )

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
          <label>Mark:</label>
          <input class="form-control" type={"text"} Placeholder="Enter your Mark" 
            name="mark"
            onChange={formik.handleChange}
            value={formik.values.mark}
            style={{border:formik.errors.mark?"solid 1px red":"solid 1px green"}}/>
           <span style={{color:"red"}}>
            {formik.errors.mark?<div>{formik.errors.mark}</div>:""}</span>
            
        </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label>Age:</label>
          <input class="form-control" type={"text"} Placeholder="Enter your Age" 
            name="age"
            onChange={formik.handleChange}
            value={formik.values.age}
            style={{border:formik.errors.age?"solid 1px red":"solid 1px green"}}/>
            <span style={{color:"red"}}>
            {formik.errors.age?<div>{formik.errors.age}</div>:""}</span>
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
          <div class="text-center">
            <input type="submit" disabled={Object.keys(formik.errors).length!==0} class="btn btn-primary"/></div>
            </div>
        </div>
              </form>
      </div>
  )
}

export default Studentform;