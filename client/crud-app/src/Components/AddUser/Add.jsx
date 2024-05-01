import React, { useState } from 'react'
import "./Add.css";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { toast } from 'react-toastify';
const Add = () => {
  
  const navigate = useNavigate();
  const [userData,setdata] = useState({
    fname : "",
    lname : "",
    email : "",
    password : ""
  });

  const handelChange = (e)=>{
    setdata({...userData , [e.target.name] : e.target.value});
  }
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    //  JSON.stringify(userData);
    try{
      const response =  await axios.post('http://localhost:3000/api/create' , userData);        
      const data = await response.data;
      //toast.success(data.msg, { position: 'top-left' });    
        navigate("/");
    }
    catch(err){
          console.error('Error submitting form:', err);
          alert('Error submitting form');
    }
  }

  

  return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Add new User</h3>
        <form className='addUserForm' onSubmit={handleSubmit}>
            <div className="inputgroup">
                <label htmlFor="fname">First Name : </label>
                <input type="text" id='fname' name='fname' autoComplete='off' placeholder='First Name'  onChange={handelChange} />
            </div>

            <div className="inputgroup">
                <label htmlFor="lname">Last Name : </label>
                <input type="text" id='lname' name='lname' autoComplete='off' placeholder='Last Name' onChange={handelChange}  />
            </div>

            <div className="inputgroup">
                <label htmlFor="email">Email : </label>
                <input type="email" id='email' name='email' autoComplete='off' placeholder='Email' onChange={handelChange}   />
            </div>

            <div className="inputgroup">
                <label htmlFor="password">Password : </label>
                <input type="password" id='password' name='password' autoComplete='off' placeholder='Password' onChange={handelChange}  />
            </div>

            <div className="inputgroup">
              <button type='submit'>ADD USER</button>
            </div>
        </form>
    </div>
  )
}

export default Add