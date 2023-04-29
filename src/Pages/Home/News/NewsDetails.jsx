import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Shared/Header/Header";
import LeftNav from "../../Shared/LeftNav/LeftNav";
import RightNav from "../../Shared/RightNav/RightNav";
import { Outlet, useLoaderData, useParams } from "react-router-dom";
import MiddleContent from "../MiddleContent";
import ShowDetails from "./ShowDetails";

const NewsDetails = () => {
    // const details = useLoaderData();
    // const id = useParams()

    // const [details, setDetails] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/news/${id}`)
    //     .then(res => res.json())
    //     .then(data => setDetails(data));
    // }, [])
    
    // console.log(details)
    return (
        <div>
      <Header></Header>

      <Container className="mt-5">
        <Row>
          <Col lg={9}>
            <h3 className=''>Dragon News</h3>
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

export default NewsDetails;