import React, { useState } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const AddUser = () => {
  let history = useHistory();
 
  const [user, setUser] = useState({
    ID: "",
    FirstName: "",
    LastName: "",  
    Address: "",
    Salary: ""
  });

  const { ID, FirstName, LastName, Address,Salary } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3001/addusers", user);
    history.push("/home");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Id"
              name="ID"
              value={ID}
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
              name="Address"
              value={Address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Salary"
              name="Salary"
              value={Salary}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button>Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;