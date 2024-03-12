import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import horror from './books/horror.json';
import SingleBook from './SingleBook';


/*function AllTheBooks() {
  return (
    <Container>
      <Row>
        {horror.map((book) => (
          <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;*/

function AllTheBooks() {

  const [name, setName] = useState('');

  const filteredBooks = horror.filter(book =>
    book.title.toLowerCase().includes(name.toLowerCase())  
  );

  return (
    <div>
      <div className='mb-3'><input type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Cerca libro"
      />
      </div>

      <div>
      <Container>
        <Row>
          {filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <SingleBook book={book} /> 
            </Col>
          ))}
        </Row>
      </Container>
      </div>
    </div>
  );

}

export default AllTheBooks;
