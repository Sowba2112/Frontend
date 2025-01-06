import React from 'react'
import { useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
import './User.css';

const UpdateUser = () => {
  const{id}=useParams();
  const[name,setName]=useState();
  const[email,setEmail]=useState();
  const[address,setAddress]=useState();
  const navigate=useNavigate();

 
  const update=(e)=>{
    e.preventDefault();
    axios.put(`https://backend-mebp.onrender.com/api/user/update/${id}`, {
      name: name,
      email: email,
      address: address
    })
    .then(result=>{
      console.log(result);
      navigate('/');
    })
    .catch(err=>{
      console.error(err);
    });
  }

  return (
    <div>
      <h1>UpdateUser</h1>
      <form onSubmit={update}>
            <label>Name</label>
            <td><input type="text" onChange={(e)=>setName(e.target.value)}/></td><br/>
            <label>Email</label>
            <td><input type="email" onChange={(e)=>setEmail(e.target.value)}/></td><br/>
            <label>Address</label>
            <td><input type="text" onChange={(e)=>setAddress(e.target.value)}/></td><br/>
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateUser
