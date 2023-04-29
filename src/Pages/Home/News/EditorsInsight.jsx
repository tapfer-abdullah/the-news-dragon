import React from "react";
import { Button, Card } from "react-bootstrap";
import img1 from "./../../../assets/1.png";
import img2 from "./../../../assets/2.png";
import img3 from "./../../../assets/3.png";

const EditorsInsight = () => {
  return (
    <div className="my-4">
      <h3>Editors Insight</h3>

      <div className="d-flex gap-2">
        <Card>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src={img3} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default EditorsInsight;
