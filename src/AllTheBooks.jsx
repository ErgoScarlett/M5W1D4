import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookCard from './BookCard';
import horror from './books/horror.json';


function AllTheBooks() {
  return (
    <Container>
      <Row>
        {horror.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <BookCard book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;