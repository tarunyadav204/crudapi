import React, { useEffect, useState } from 'react'
import "./User.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const User = () => {

    const [lists, setLists] = useState([]);


    const getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/read`);
            const data = await response.data;
            setLists(data);
        }
        catch (err) {
            console.error('Error fetching user data:', err);
        }
    }

    const handelDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/${id}`);
            const data = await response.data;
            setLists((prevUser) => prevUser.filter((user) => user._id !== id));
            console.log("Successfully Deleted User", data);
            //toast.success(data.msg, { position: 'top-right' });    

        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getUsers();

    }, [])

    return (
        <div className='user-table'>
            <Link to={"/add"} className='addBtn'>ADD USER</Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {lists.map((user, index) => {
                        return (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.fname} {user.lname}</td>
                                <td>{user.email}</td>
                                <td className='actionBtns'>
                                    <button onClick={() => handelDelete(user._id)} ><i className="fa-solid fa-trash fa-beat-fade" style={{ color: '#080808' }}></i></button>
                                    <Link to={`/edit/` + user._id}><i className="fa-solid fa-user-pen fa-fade" style={{ color: '#eaeef5' }}></i></Link>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default User