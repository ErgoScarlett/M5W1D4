// BookDetail.js
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { Container, Row, Col, Card, Button, ListGroup,} from 'react-bootstrap';
import books  from '../books/horror.json';
import MyNav from '../components/MyNav';
import MyFooter from '../components/MyFooter';


export const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/'; 
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA3OTA3ODMsImV4cCI6MTcxMjAwMDM4M30.BSJ3pGD8tNy9o8s_cuUqma6Key7oL4WCRpe_2KrPKbI';


export default function BookDetails() {

const navigate = useNavigate();

  const [reviews, setReviews] = useState([]);

  const { asin } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
      )
      const data = await response.json();
      setReviews(data);
    };

    fetchReviews();
  }, [asin]);

  const book = books.find(b => b.asin === asin);

  if(!book) {
    return <h2>Libro non trovato</h2>;
  }

  return (
    <>
    <MyNav/>
  <Container>
  
    <Card>
      
      <Card.Body className='d-flex flex-column align-items-center'>
        <Row className='w-100'>
        <Col md={4}>
          <Card.Img src={book.img}
          style={{height: '300px', width: '200px' }} />
        </Col>

        <Col md={8}>
          
            <Card.Title className='text-center'>{book.title}</Card.Title>
            <Card.Text className='text-center'>
              Categoria: {book.category}
            </Card.Text>
            <Card.Text className='text-center'>
              Prezzo: {book.price} €
            </Card.Text>
            <div className='d-flex justify-content-center'>
            <Button variant="primary"
            onClick={() => navigate ('/')}>
              Torna alla Home
            </Button>
            </div>
            </Col>
            </Row>
          </Card.Body>        
    </Card>
  </Container>

      <h2 className='text-center mt-5'>Recensioni</h2>
<ListGroup className="w-50 mx-auto">
      {reviews.map(review => (
        <ListGroup.Item key={review.id}>
            <Row>
                <Col xs={8} className='text-center'>
          {review.comment}
          </Col>
          <Col xs={4}>{review.rate}
          </Col> 
          </Row>
        </ListGroup.Item>
      ))}
      </ListGroup>

    <MyFooter/>
    </>
  );

}
