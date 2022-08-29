import React, { useState, useEffect } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const history = useHistory();
  const params = useParams();
  const { id } = params;

  const [info, setInfo] = useState({
    username: "",
    email: "",
    age: "",
    mobile: "",
    profession: "",
    address: "",
    date: "",
    desc: "",
    img: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setInfo({ ...info, [e.target.name]: value });
  };

  // get data
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/users/${id}`);
      setInfo(res.data.singleUser);
    };

    getData();
  }, [id]);

  // update data

  const handleSubmit = async (e) => {
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
      const res = await axios.put(`/users/${id}`, {
        username,
        email,
        age,
        mobile,
        profession,
        address,
        desc,
        date,
        img,
      });

      history.push("/users");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container my-5">
        <div className="text-center">
          <h2 className="text-black fw-bold">Edit an appointment</h2>
        </div>
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <Form>
              <Row className="mb-3">
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={info.username}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={info.email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="age">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={info.age}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    value={info.mobile}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="work">
                  <Form.Label>Work</Form.Label>
                  <Form.Control
                    type="text"
                    name="profession"
                    value={info.profession}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={info.address}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="text"
                    name="img"
                    value={info.img}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="date">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="text"
                    name="date"
                    value={info.date}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                    name="desc"
                    value={info.desc}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Row>

              <div className="d-grid gap-2">
                <Button
                  variant="secondary mb-3"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </Form>
            <Link to="/" className="text-dark">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
