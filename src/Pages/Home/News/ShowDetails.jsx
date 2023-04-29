import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import EditorsInsight from "./EditorsInsight";

const ShowDetails = () => {
  const news = useLoaderData();
  // const id = useParams();
  const { image_url, title, details, author, _id ,category_id} = news;
  console.log(news);
  return (
    <div>
        <Card style={{padding: "30px" }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <Button variant="danger"> <FaArrowLeft></FaArrowLeft>
        <Link className="text-decoration-none text-white" to ={`/category/${category_id}`}>  All news in this category</Link></Button>
      </Card.Body>
    </Card>
    <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default ShowDetails;
