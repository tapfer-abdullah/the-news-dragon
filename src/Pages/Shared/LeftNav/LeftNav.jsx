import React, { useEffect, useState } from 'react';
import News from '../../Home/News/News';
import img1 from "./../../../assets/1.png";
import img2 from "./../../../assets/2.png";
import img3 from "./../../../assets/3.png";
import { Button, Card } from 'react-bootstrap';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect( () =>{
        fetch("https://the-dragon-news-server-tapferabdullah-gmailcom.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    } ,[])
    return (
        <div>
            <h2>All Caterogy</h2>
            <div className='ms-4'>
            {
                categories.map(category => <News 
                    className='fs-4' key={category.id}
                    category = {category}
                ></News>)
            }

<div className="">
        <Card className='my-2'>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='my-2'>
          <Card.Img variant="top" src={img2} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              21 The Most Stylish Wedding Guest Dresses For Spring
            </Card.Text>
            <Button variant="danger">Go somewhere</Button>
          </Card.Body>
        </Card>

        <Card className='my-2'>
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
        </div>
    );
};

export default LeftNav;