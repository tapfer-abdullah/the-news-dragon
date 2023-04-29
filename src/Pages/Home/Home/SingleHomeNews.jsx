import moment from "moment";
import React from "react";
import { Card, Image, ListGroup } from "react-bootstrap";
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const SingleHomeNews = ({ n }) => {
  const { image_url, title, details, author, _id , rating, total_view} = n;
  // console.log(n);
  return (
    <Card className="mb-4" style={{ width: "" }}>
      <Card.Body className="d-flex align-items-center">
        <Image
          className="m-3"
          style={{ width: "40px" }}
          src={author.img}
          roundedCircle
        />
        <div className="flex-grow-1">
          <p className="m-0">{author.name}</p>
          <p className="m-0">
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt className="mx-2" />
        </div>
      </Card.Body>
      <Card.Title className="my-2 mx-3">{title}</Card.Title>
      <Card.Body>
        <Card.Text>
          <Card.Img variant="top" src={image_url} />
          {details.length > 150 ? <>{details.slice(0, 200)}....</> : details}{" "}
          <br />
          <Link
            to={`/news/${_id}`}
            className="text-warning text-decoration-none"
          >
            Read More
          </Link>
        </Card.Text>
      </Card.Body>

      <div className="d-flex m-3">
        <div className="flex-grow-1">
          <Rating
            readonly
            placeholderRating={rating.number}
            emptySymbol={
              <FaRegStar className="text-warning"/>
            }
            placeholderSymbol={
              <FaStar className="text-warning"/>
            }
            fullSymbol={
              <FaStar className="text-warning"/>
            }
          />
          <span className="mx-2">{rating?.number}</span>
        </div>

        <div>
          <FaEye className="mx-2"/>
          {total_view}
        </div>
      </div>
    </Card>
  );
};

export default SingleHomeNews;
