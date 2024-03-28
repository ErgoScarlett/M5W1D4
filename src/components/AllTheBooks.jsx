import { React, useState} from 'react'
import { Row, Col} from 'react-bootstrap';
import horror  from '../books/horror.json';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';



const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false)
  return (
    <Row>
      <Col md={8}>
        <Row className="g-2 mt-3" >
          {horror.filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}> 
                  <SingleBook
                    book={book}
                    selected={selected}
                    setSelected={setSelected}
                  />
                </Col>
              )
            })}
        </Row>
      </Col>
      <Col md={4}>
        <CommentArea asin={selected} />
      </Col>
    </Row>
   
  )
}

export default AllTheBooks





/*const AllTheBooks = ({book, search}) => {

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

export default AllTheBooks*/

