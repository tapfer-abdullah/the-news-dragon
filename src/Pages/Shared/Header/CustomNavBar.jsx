import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const CustomNavBar = () => {
  const {user, logoutUser} = useContext(AuthContext);
  const location = useLocation();
  // console.log(location.pathname)

  const handleLogout = () =>{
    logoutUser()
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          {(location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/terms-and-conditions" ) && <h4>The News Dragon</h4>}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link
                className="mx-1 text-decoration-none text-secondary "
                to="/"
              >
                Home
              </Link>
              <Link className="mx-1 text-decoration-none text-secondary " to="">
                About
              </Link>
              <Link className="mx-1 text-decoration-none text-secondary " to="">
                Career
              </Link>
              {/* <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="">About</Nav.Link>
            <Nav.Link to="">Career</Nav.Link> */}
            </Nav>
            <Nav>
              <Nav.Link href="">
                {" "}
                {user && (
                  <FaUserCircle
                    style={{ fontSize: "2rem", margin: "0 10px" }}
                  ></FaUserCircle>
                )}
                {user?.displayName}
              </Nav.Link>
              {user ? (
                <Nav.Link eventKey={2} href="">
                  <Button onClick={handleLogout} variant="dark">
                    Log out
                  </Button>
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2}>
                  <Button variant="dark">
                    <Link to="/login">Log in</Link>
                  </Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavBar;
