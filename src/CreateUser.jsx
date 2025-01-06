import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './User.css';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post('https://backend-mebp.onrender.com/api/user/create', { name, email, address })
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
       <center><h1>Create User</h1></center>
      <form onSubmit={submit}>
        <label>Name</label>
        <td><input type="text" onChange={(e) => setName(e.target.value)} /></td>
        <br />
        <label>Email</label>
        <td><input type="email" onChange={(e) => setEmail(e.target.value)} /></td>
        <br />
        <label>Address</label>
        <td><input type="text" onChange={(e) => setAddress(e.target.value)} /></td>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateUser;