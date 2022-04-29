import { createContext } from "react";
import React from "react";

let Usercontext=React.createContext();
const Userprovider=Usercontext.Provider;
export{Userprovider}
export default Usercontext;