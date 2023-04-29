import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";
import CustomNavBar from "./CustomNavBar";

const Header = () => {

  return (
    <Container>
      <div className="text-center">
        <img className="pt-4" src={logo} alt="" />
        <p className="text-secondary">Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex p-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={80}>
        I can be a React component, multiple React components, or just some
          text........     I can be a React component, multiple React components, or just some
          text........
        </Marquee>
      </div>

      <CustomNavBar></CustomNavBar>
    </Container>
  );
};

export default Header;
