import { React, useContext } from 'react'
import { Container ,Row, Col} from 'react-bootstrap';
/*import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';*/
import SingleBook from './SingleBook';
import { ThemeContext } from './ThemeContextProvider';


const AllTheBooks = ({book, search}) => {

  const filteredBooks = book.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  )

  const {theme} = useContext(ThemeContext);

  return (
    <div style={{background: theme === 'light'? '#F8F9FA' : '#333'}}>
      
      <Container>
        <Row>        
          {filteredBooks.map(book => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={3}>
              <SingleBook book={book} key={book.id}/> 
            </Col>
          ))} 
        </Row>
      </Container>

    </div>
  )

}

export default AllTheBooks

