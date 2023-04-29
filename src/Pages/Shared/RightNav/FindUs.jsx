import React from "react";
import { ListGroup } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Findus = () => {
  return (
    <div>
      <h4>Find us on</h4>
      <div>
        <ListGroup>
          <ListGroup.Item><FaFacebook className="text-primary"/> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter className="text-primary"/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram className="text-danger"/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default Findus;
