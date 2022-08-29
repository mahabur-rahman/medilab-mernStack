import React, { useEffect, useState } from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Link, useParams, useHistory } from "react-router-dom";
// react bootstrap
import { Image } from "react-bootstrap";
import axios from "axios";

const View = () => {
  const history = useHistory();

  const [userData, setUserData] = useState({});
  const params = useParams();
  // console.log(params);
  const { id } = params;

  const getSingleData = async () => {
    const res = await axios.get(`/users/${id}`);
    setUserData(res.data.singleUser);
  };

  useEffect(() => {
    getSingleData();
  }, []);

  const deleteSingleUser = async () => {
    try {
      const res = await axios.delete(`/users/${id}`);
      console.log("res : ", res.data);
      history.push("/users");
    } catch (err) {
      console.log(err);
    }
  };

  const { username, email, img, profession, mobile, desc, address } = userData;

  return (
    <>
      <div className="py-5">
        <h2 className="text-center fw-bold">Welcome {username}</h2>

        <div className="card">
          <div className="d-flex justify-content-center my-3">
            <Link to={`/edit/${id}`}>
              <FaRegEdit className="text-warning" />
            </Link>
            <button
              className="border-0 bg-transparent"
              onClick={deleteSingleUser}
            >
              <FaTrashAlt className="text-danger mx-3" />
            </button>
          </div>
          <Image
            style={{
              height: "400px",
              width: "700px",
              textAlign: "center",
              margin: "0 auto",
            }}
            src={
              img ||
              "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            }
            alt="Profile"
            fluid
          />
          <div className="card-body mt-4">
            <div className="d-flex shadow pb-5">
              <div style={{ marginLeft: "23rem" }}>
                <h4>
                  <span className="fw-bold">Name :</span> {username}{" "}
                </h4>
                <h4>
                  <span className="fw-bold">Age :</span> 27
                </h4>
                <h4>
                  <span className="fw-bold">Email :</span> {email}
                </h4>
                <h4>
                  <span className="fw-bold">Work :</span> {profession}{" "}
                </h4>
              </div>
              <div className="mx-5 px-5">
                <h4>
                  <span className="fw-bold">Mobile :</span> {mobile}
                </h4>
                <h4>
                  <span className="fw-bold">Location :</span> {address}{" "}
                </h4>
                <h4>
                  <span className="fw-bold">Desc :</span> {desc}{" "}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
