import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import CustomNavBar from "../Shared/Header/CustomNavBar";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const [errorM, setErrorM] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setErrorM("");
      })
      .catch((error) => {
        console.log(error);
        setErrorM(error.message);
      });
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <CustomNavBar></CustomNavBar>
      <div className="mx-auto mt-5" style={{ width: "50%" }}>
        <h3 className="text-center">Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Your name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhotoURL">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photoURL"
              type="text"
              placeholder="Enter your photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              className=""
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onClick={handleChecked}
              type="checkbox"
              label={
                <>
                  Accept{" "}
                  <Link to="/terms-and-conditions">Term & Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Button
            style={{ width: "100%" }}
            variant="primary"
            type="submit"
            disabled={!isChecked}
          >
            Register
          </Button>
          <Form.Text className="text-black">
            Already Have An Account ?{" "}
            <Link to="/login" className="text-primary">
              Login
            </Link>
          </Form.Text>
          <br />
          <Form.Text className="text-danger">{errorM}</Form.Text>
        </Form>
      </div>
    </>
  );
};

export default Registration;
