import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Displayprofile = () => {
 
    
  let [fetching,setfetching]=useState([]);
  let fetchapi= async ()=>
  {
    let {data}=await axios.get("http://localhost:3000/employe");
    console.log(data);
    setfetching(data)
  }
  useEffect(()=>
  {
    try{
      fetchapi()
    }
    catch(e)
    {
      console.log(e);
      
    }
  },[]);
  
  //   ****Delete an employee****
  let deleteEmployee = (id) => {
    axios.delete("http://localhost:3000/employe/" + id);
    
  };

  return (
   <section>
    
     <div className="pp"><p> Profile Details </p></div>
    <div>
      {
        fetching.map((val)=>
        {
          return (
            <div className="class" key={val.id}> 
             <p className="fetcg">Email:{val.email}</p> 
             <p className="fetcg">Password:{val.password}</p> 
             
              <button onClick={()=>deleteEmployee(val.id)} className='viewm'>Delete</button>

             <NavLink to={`/edit/${val.id}`}> <button className='viewm'>Edit</button></NavLink>
            
            </div>
          )
        })
      }
    </div>


   </section>
  )
}

export default Displayprofile