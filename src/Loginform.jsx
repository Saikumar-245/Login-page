import React, {  useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toast';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {

   let [employe,setEmploye]=useState({
    email:"",
    password:""
  })
  let {email,password} = employe;
   let [errors,setErrors]=useState({})
  let navigate=useNavigate()
  // let navigate=useNavigate()

  let handleinput = (e) => {
    // console.log(e);
    let {name,value} = e.target
    setEmploye({...employe,[name]:value})
  }

  let handlesubmit = (e) => {
    e.preventDefault()
    console.log(employe);
    //logic to send the data to server
     let ValidationErrors={}
       
    //email
    if(email==""){
    ValidationErrors.email="This is mandatory"
    }
    //  password
    if(password==""){
        ValidationErrors.password="This is a mandatory"
    }
    else{
      toast.success("Successfully Login");
      let paylaod={email,password};
        axios.post("http://localhost:3000/employe",paylaod);
        navigate("/Display")

    }
   
    setErrors(ValidationErrors)  
      

  }

  return (
    <>
    <center>
    <form action="" onSubmit={handlesubmit} className='form'> 
        <img src="../img/person.png" alt="leaf"  className='leaf'/>
        <h2 className='loginf'>Login Form</h2>
    <section className="email">
        <label htmlFor="" className='label'>EMAIL</label> 
        <div> <input type="text"  placeholder='Enter email' name='email' value={email} onChange={handleinput}/></div>
       <div className='form-errors '>
            {errors.email && <span>{errors.email}</span>}
         </div>
    </section>
    <section className="password"><label htmlFor="">PASSWORD</label>
    <div> <input type="password"  placeholder='Enter password' name='password' value={password} onChange={handleinput}/>
    </div>
        <div className='form-errors '>
            {errors.password && <span>{errors.password}</span>}
         </div>
       </section>
       <section className='form-group'>
        
        <div className='inp mt-2 p-2 my-3'>
          <button className='submit' >SUBMIT </button>
        </div>
    </section>
   </form> </center>
  
     </>
  )
}

export default Loginform
