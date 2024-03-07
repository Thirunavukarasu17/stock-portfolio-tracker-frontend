import React, { useState } from "react";
import { signUp } from "../utilities/users-service";
import { Button, Form } from "react-bootstrap";

const SignUpForm = ({ setUser }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  });

  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = formData;
      const user = await signUp({ name, email, password });
      setUser(user);
    } catch {
      setFormData({ ...formData, error: "Sign Up Failed - Try Again" });
    }
  };

  const disable =
    formData.password !== formData.confirm || formData.password.length === 0;

  return (
    <div className="p-1" style={{ background: 'linear-gradient(to right, #feb47b, #ff7e5f)' }}>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Form.Group className="m-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="m-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </Form.Group>
        <Form.Group className="m-3" controlId="formBasicConfirm">
          <Form.Label>Confirm</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Confirm password"
            value={formData.confirm}
            onChange={handleChange}
            autoComplete="off"
            required
          />
        </Form.Group>
        <Button className="m-3" variant="primary" type="submit" disabled={disable}>
          Submit
        </Button>
      </Form>
      <br />
      <p style={{ color: "red" }}>{formData.error}</p>
    </div>  
  );
};

export default SignUpForm;
