import React, {useEffect, useState} from 'react';
import {Table,Button} from 'react-bootstrap';
import {Nav} from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Link1() {
    const [users,setUsers] = useState([]);

    useEffect( () => {
        console.log("working");
        loadUsers();
    },[] );

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3001/getusers");
        console.log(result);
        setUsers(result.data.data);
    }
        const [show,setShow] = useState(false);

        const Deleteuser= async id =>{
            await axios.delete(`http://localhost:3001/delete/${id}`)
            loadUsers();
        }
    return (<div>
 
    <div>
           <Nav>
           <Nav.Link onClick={()=> setShow(true)}>Get USer</Nav.Link>
           </Nav>
   </div>
        <div id="add">
       <button><Link to="/AddUser">Add User</Link></button> 
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th colSpan="2">Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                show?
                users.map((user)=> (
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td><button><Link to={`/Edituser/${user.id}`}>Edit</Link></button></td>
                <td><button onClick={()=>Deleteuser(user.id)}>Delete</button></td>
            </tr>
                ))
                :null      
  }    
    </tbody>
        </table>
      
    </div>
    </div>
    );
  }
  
  export default Link1;

