import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);
  const toggleSelected = () => {
    setSelected(!selected);
  }

  const { title, img, price, category } = book;
  return (
    <Col>
      <Card style={{ width: '100%', height: '600px', marginBottom: '20px'}} onClick={toggleSelected} className= {selected? "selected" : ""}>
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

export default SingleBook;