import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
// react icon
import { FaEye, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AllDataShow = () => {
  const [users, setUsers] = useState([]);

  // get all user data

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`/users`);
      setUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //   delete user

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`/users/${id}`);

      console.log(res);

      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-end mb-4">
          <Link to="/register">
            <button className="btn btn-secondary">+ Create appointment</button>
          </Link>
        </div>

        {/* table start */}
        <Table striped bordered hover>
          <thead className="bg-secondary text-dark">
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Job</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.users?.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <span className="userImg">
                      <img
                        style={{
                          height: "30px",
                          width: "30px",
                          borderRadius: "50%",
                          margin: "0 .5rem",
                        }}
                        src={
                          user.img ||
                          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
                        }
                        alt=""
                      />
                    </span>
                    {user.username}
                  </td>
                  <td>{user.email}</td>
                  <td>{user.profession}</td>
                  <td>{user.mobile}</td>
                  <td>{user.date}</td>
                  <td>
                    <Link to={`/view/${user._id}`} className="text-success">
                      <FaEye />
                    </Link>
                    <Link
                      to={`/edit/${user._id}`}
                      className="text-warning mx-3"
                    >
                      <FaRegEdit />
                    </Link>
                    <button
                      className="text-danger border-0"
                      onClick={() => deleteUser(user._id)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default AllDataShow;
