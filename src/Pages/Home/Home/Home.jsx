import React from "react";
import Footer from "../../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import RightNav from "../../Shared/RightNav/RightNav";
import { Outlet, useLoaderData } from "react-router-dom";
import MiddleContent from "../MiddleContent";


const Home = () => {

  // const categories = useLoaderData();
  // console.log(categories)

  return (
    <div>
      <Header></Header>

      <Container className="mt-5">
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h3 className=''>Dragon News Home</h3>
            {/* <MiddleContent></MiddleContent> */}
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  );
};

export default Home;
