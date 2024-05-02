import React, { useEffect, useState } from 'react'
import "../AddUser/Add.css";
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  const URL = "https://crudapi-backend.vercel.app/";
  const { id } = useParams(); // Accessing id parameter correctly
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const getUser = async () => {
    try {
      //const response = await axios.get(`http://localhost:3000/api/${id}`);
      const response = await axios.get(`${URL}/api/${id}`);
      const data = await response.data;
      setUser(data.userData);
      console.log(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUser();
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //const response = await axios.patch(`http://localhost:3000/api/${id}`, user);
      const response = await axios.patch(`${URL}/api/${id}`, user);
      const data = await response.data;
      console.log(data);
    }
    catch (err) {
      console.log(err);
    }
    navigate("/");
  };

  return (
    <div className='addUser'>
      <Link to={"/"}>Back</Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={handleSubmit}>
        <div className="inputgroup">
          <label htmlFor="fname">First Name : </label>
          <input type="text" id='fname' name='fname' value={user.fname} autoComplete='off' placeholder='First Name' onChange={handleChange} />
        </div>

        <div className="inputgroup">
          <label htmlFor="lname">Last Name : </label>
          <input type="text" id='lname' name='lname' value={user.lname} autoComplete='off' placeholder='Last Name' onChange={handleChange} />
        </div>

        <div className="inputgroup">
          <label htmlFor="email">Email : </label>
          <input type="email" id='email' name='email' value={user.email} autoComplete='off' placeholder='Email' onChange={handleChange} />
        </div>

        <div className="inputgroup">
          <button type='submit'>Update User</button>
        </div>
      </form>
    </div>
  )
}

export default Edit