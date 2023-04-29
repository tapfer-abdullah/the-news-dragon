import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import CustomNavBar from "../Shared/Header/CustomNavBar";

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorM("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });
  };

  return (
    <>
      <CustomNavBar></CustomNavBar>
      <div className="mx-auto mt-5" style={{ width: "50%" }}>
        <h3 className="text-center">Please Log in</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button style={{ width: "100%" }} variant="primary" type="submit">
            Log in
          </Button>
          <Form.Text className="text-black">
            Dont't Have An Account ?{" "}
            <Link to="/register" className="text-primary">
              Register
            </Link>
          </Form.Text>
          <br />
          <Form.Text className="text-danger">{errorM}</Form.Text>
        </Form>
      </div>
    </>
  );
};

export default Login;
