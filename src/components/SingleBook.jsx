import React, {useState} from "react";
import Col from 'react-bootstrap/Col';
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
      setShowComments(!showComments);
  }


  const { title, img, price, category } = book;
  return (
    <Col>
      <Card style={{ width: '100%', height: '600px', marginBottom: '20px'}} onClick={handleClick} className= {selected ? "selected" : ""}>
        <Card.Img variant="top" src={img} style={{ height: '450px'}} />
        <Card.Body>
          <Card.Title style={{fontSize: '15px'}}>{title}</Card.Title>
          <Card.Text>{`Category: ${category}`}</Card.Text>
          <Card.Text>{`Price: $${price}`}</Card.Text>
        </Card.Body>
      </Card>
      {showComments && <CommentArea bookId={book.id} /> }
    </Col>
  );
}

export default SingleBook;