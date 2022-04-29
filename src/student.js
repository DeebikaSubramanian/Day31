// import React from 'react'
import React, { useContext, useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import Usercontext from './usercontext';
import axios from 'axios'
import Swal from "sweetalert2";


 function Student() {
   const [studentdata,setstudentdata]=useState([])
    
   useEffect(()=>
    {
        display()
       
    },[])
    async function display()
    {
        const student=await axios.get("https://624357603da3ac772b01a9e9.mockapi.io/student")
        setstudentdata(student.data)
    }
    
    function deletestudent(id1)
    {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( (result) => {
            if (result.isConfirmed) {
                
                Swal(axios.delete(`https://624357603da3ac772b01a9e9.mockapi.io/student/${id1}`))
                .then(()=>{})
                Swal.fire(
                 'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
         
        }
        display()
       
  return (
           <>
       <div class="container-fluid">
         <div class="row"> 
    <h1 class="col-sm-10 col-md-10 col-lg-10 col-xl-10 h3 mb-2 text-gray-800">Student</h1>
    <Link  to={'/studentform'}>
    <button class="button bg-primary">Create</button>
    </Link></div>
    
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p>
            <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Student Details</h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                            {/* <th>ID</th> */}
                                                <th>Name</th>
                                                <th>Mark</th>
                                                <th>Age</th>
                                                <th>Class</th>
                                                <th>Action</th>
                                        </tr>
                                        </thead>
                                        
                                        <tbody>
                                         
                                            {
                                                                                            
                                               studentdata.map((e)=>
                                                {
                                                    
                                                    return(
                                                        
                                                <tr>
                                                <td>{e.name}</td>
                                                <td>{e.mark}</td>
                                                <td>{e.age}</td>
                                                <td>{e.class}</td> 
                                                <td><div class="d-grid gap-5 d-md-block">
                                                <Link to={`/studentview/${e.id}`} class="btn btn-primary" type="button">View</Link>
                                                 <Link to={`/studentedit/${e.id}`} class="btn btn-success" type="button">Edit</Link>
                                                 <button class="btn btn-danger" type="button"onClick={()=>deletestudent(e.id)}>Delete</button>
                                                
                                                </div></td>
                                                
                                            </tr>
                                                    );
                                                })
                                            }
                                            

</tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    
                   
                
      </>
  )
}

export default Student;







                                            
                                          