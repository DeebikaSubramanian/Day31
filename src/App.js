import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './topbar';
import Dashboard from './dashboard';
import Teacher from './teacher';
import Student from './student'
import Studentform from './studentform';
import Teacherform from './teacherform';
import Studentview from './studentview';
import Studentedit from './studentedit';
import Teacherview from './teacherview';
import Teacheredit from'./teacheredit';
import Studentdelete from './studentdelete';
import {Routes,Route,BrowserRouter} from "react-router-dom";
import { Userprovider } from './usercontext';
import { useState } from 'react';


function App() {
  
  const[createform,setcreateform]=useState([]);
  
   const [createprofile,setprofile]=useState([]);
 
  return (
    <BrowserRouter> 
     <div id="wrapper">
       <Userprovider value={{createform,setcreateform,createprofile,setprofile}}>
            <Sidebar></Sidebar>
       <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
              <Topbar></Topbar>
               <div class="container-fluid">
            <Routes>
           
              <Route path="/dashboard" element={<Dashboard/>}></Route>
              <Route path="/teacher" element={<Teacher/>}></Route>
              <Route path='/student'element={<Student/>}></Route>
              <Route path="/studentform" element={<Studentform/>}></Route>
              <Route path="/teacherform" element={<Teacherform/>}></Route>
              <Route path="/studentview/:id" element={<Studentview/>}></Route>
              <Route path="/studentedit/:id" element={<Studentedit/>}></Route>
              <Route path="/teacherview/:id" element={<Teacherview/>}></Route>
              <Route path="/teacheredit/:id" element={<Teacheredit/>}></Route>
              <Route path="/studentdelete/:id" element={<Studentdelete/>}></Route>
                          
              </Routes>
              </div>
     </div>
     </div>
     </Userprovider>
    
            </div>
            </BrowserRouter>
  );
}

export default App;
