import React,{useState}from "react";
import "./style.css"
const Login =() =>{
    const [Username,setUsername]=useState('')
    console.log(Username)
 
   return(
       <div >
           <form className="form">
               <h1>Login</h1>
               <input placeholder="Enter Username" type="text"
               onChange={(e)=>{setUsername(e.target.value)}}/>
               <br>
               </br>
               <br>
               </br>
               <input placeholder="Enter Password" type="password"
               />
               <br>
               </br>
               <br>
               </br>
               <button>Login</button>
           </form>
       </div>
   )
}
export default Login;