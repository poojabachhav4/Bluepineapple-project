import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const Edituser = () => {
  const {ID} = useParams();
  let history = useHistory();

  const [user, setUser] = useState({
    id: "",
    FirstName: "",
    LastName: "",  
    address: "",
    salary: ""
  });

  const { id, FirstName, LastName, address,salary } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect( () => {
    console.log("working");
    loadUser();
},[] );

  

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/update/${ID}`, user);
    history.push("/home");
  };

  const loadUser = async () => {
    const result= await axios.get(`http://localhost:3001/getuserid/${ID}`);
    setUser(result.data.data[0])
    console.log(result.data);
    console.log(result.data.data[0]);
   }
 
  
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Id"
              name="id"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your FirstName"
              name="FirstName"
              value={FirstName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="LastName"
              value={LastName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter  Address"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Salary"
              name="salary"
              value={salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button>update User</button>
        </form>
      </div>
    </div>
  );
};

export default Edituser;