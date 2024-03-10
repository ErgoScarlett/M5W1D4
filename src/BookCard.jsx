import React from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

export default function BookCard({ book }) {
  const { title, img, price, category } = book;
  return (
    <Col>
      <Card style={{ width: '100%', height: '600px', marginBottom: '20px'}}>
        <Card.Img variant="top" src={img} style={{ height: '450px'}} />
        <Card.Body>
          <Card.Title style={{fontSize: '15px'}}>{title}</Card.Title>
          <Card.Text>{`Category: ${category}`}</Card.Text>
          <Card.Text>{`Price: $${price}`}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}