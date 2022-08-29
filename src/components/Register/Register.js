import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const history = useHistory();

  const [info, setInfo] = useState({
    username: "",
    email: "",
    age: "",
    mobile: "",
    profession: "",
    img: "",
    address: "",
    date: "",
    desc: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setInfo({ ...info, [e.target.name]: value });
  };

  // ############ axios  ############

  const userRegister = async (e) => {
    e.preventDefault();

    const {
      username,
      email,
      age,
      mobile,
      profession,
      address,
      desc,
      date,
      img,
    } = info;

    try {
      const res = await axios.post(`/users/register`, {
        username,
        email,
        age,
        mobile,
        profession,
        address,
        date,
        desc,
        img,
      });

      alert("Appointment Successfully Created!");
      setInfo("");
      history.push("/users");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h2 className="fw-bold">Create an appointment</h2>
        </div>
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="number"
                    name="mobile"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="text"
                    name="img"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Work</Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="date"
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <textarea
                    className="form-control"
                    rows="5"
                    type="text"
                    name="desc"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={userRegister}
                >
                  Submit
                </Button>
                <Link to="/">Back to home</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
