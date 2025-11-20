import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toast';

const Update = () => {
     
let [employe, setEmployee] = useState({
    email:"",
    password:""
});
  let {email,password} = employe;
let handleinput = (e) => {
  let { name, value } = e.target;
  setEmployee({ ...employe, [name]: value });
};

let navigate = useNavigate()

//   *****To fetch data and reflect it in particular input based on ID****
let {id} = useParams()
console.log(id)

let fetchApi = async()=>{
  let {data}=await axios.get("http://localhost:3000/employe/"+id)
  console.log(data)
  setEmployee(data)
}
;


useEffect(()=>{
  try{
   fetchApi();
  }catch(e){
      console.log(e)
  }
},[])
   
   

let handlesubmit = (e) => {
  e.preventDefault();
 try{
  let payload = employe;
      axios.put("http://localhost:3000/employe"+id, payload);
      navigate('/Display')
      toast.success('Successfully updated!');
    }
    catch(e)
    {
        console.log(e);
        
    }
    finally
    {
        setEmployee({
            email:"",
            password:"",
        })
    }
}

  
  return (
    
   <center>
    <form action="" onSubmit={handlesubmit} className='form'> 
        <img src="../img/person.png" alt="leaf"  className='leaf'/>
        <h2 className='loginf'>Update Your Email && Password</h2>
    <section className="email">
        <label htmlFor="" className='label'>EMAIL</label> 
        <div> <input type="text"  placeholder='Enter email' name='email' value={email} onChange={handleinput}/></div>
      
    </section>
    <section className="password"><label htmlFor="">PASSWORD</label>
    <div> <input type="password"  placeholder='Enter password' name='password' value={password} onChange={handleinput}/>
    </div>
       
       </section>
       <section className='form-group'>
        
        <div className='inp mt-2 p-2 my-3'>
          <button className='submit' >SUBMIT </button>
        </div>
    </section>
   </form> </center>
  )
}

export default Update