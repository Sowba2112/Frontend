import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const User = () => {
const [user, setUser] = useState([
    // {name:"sow",email:"sow@gmail.com", address:" Erode"}
]);  

useEffect(() => {
    axios.get('https://backend-mebp.onrender.com/api/user/fetch')
         .then(result=>{setUser(result.data.users)})
        .catch(err=>{console.log(err)})
}, []);
const deleteUser = (id) => {
    axios.delete(`https://backend-mebp.onrender.com/api/user/delete/${id}`)
    .then(result=>{console.log("user deleted")})
    .catch(err=>{console.log(err)})
}
  return (
    <div>
      <center><h1>User Details</h1></center>
      <center><Link to="/create">Create</Link></center>
      <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
        </tr>
        {
            user.map((users) => (
                <tr>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.address}</td>
                    <td>
                    <Link to ={`/update/${users._id}`}>Update</Link>
                    <button onClick={()=>deleteUser(users._id)}>delete</button>  
                    </td>
                </tr>
            ))
        }
      </table>
    </div>
  )
}

export default User

