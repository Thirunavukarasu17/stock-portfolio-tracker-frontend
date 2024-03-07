import { useState } from "react";
import * as usersService from "../utilities/users-service";
import { Button, Form } from "react-bootstrap";

const LoginForm = ({ setUser }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (evt) => {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
      //console.log(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  };



  return (
    <>
      <div
        className="sign-in__wrapper"
        style={{ background: "linear-gradient(to right, #feb47b, #ff7e5f)" }}
      >
        <Form className="shadow p-5 rounded" onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={credentials.email}
              placeholder=" Enter Email"
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button
              style={{ width: "150px", height: "40px", margin: "10px", marginTop: "20px" }}
              variant="primary"
              type="submit"
            >
              LOG IN
            </Button>
          </div>
        </Form>
      </div>
      <br />
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
};

export default LoginForm;
