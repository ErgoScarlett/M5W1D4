import {React, useContext} from 'react';
import { Button, /*ListGroup, Row, Col*/ Table } from 'react-bootstrap'
import { ThemeContext } from './ThemeContextProvider';

export const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/'; 
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTIxNTgzODAsImV4cCI6MTcxMzM2Nzk4MH0.6FLmqNx8aNJv6loTh2o1I1hvj7EqStOIzrWC750aaO8';


const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      if (response.ok) {
        alert('La recensione è stata elimata!')
      } else {
        throw new Error('La recensione non è stata eliminata!')
      }
    } catch (error) {
      alert(error)
    }
  }
  const {theme} = useContext(ThemeContext);
  return (
   
<Table responsive="sm" bg={theme} data-bs-theme={theme}>

<thead>
  <tr>
    <th className='col-md-4'>Recensione</th>  
    <th className='col-md-4'>Valutazione</th>
    <th className='col-md-4'></th>
  </tr>
</thead>

<tbody>
  
    <tr key={comment._id}>
      <td>{comment.comment}</td>
      <td>{comment.rate}</td>
      <td>
        <Button variant="outline-danger" size='sm'
         onClick={() => deleteComment(comment._id)}>
          Elimina
        </Button>
      </td>
    </tr>
</tbody>

</Table>
  )
}

export default SingleComment





    /*<ListGroup.Item style=
    {{background: theme === 'light'? '#F8F9FA' : '#212529',
    color: theme === 'light'? '#212529' : '#F8F9FA'}}>
      <Row>
        <Col className='d-flex align-items-center'>
        
        <div className='me-3'>
        <p>Recendioni:</p>
        {comment.comment }
        </div>

        <div>   
      <p>Valutazione:</p>
      {comment.rate}
      </div>  
      </Col>
      
     
     <Col>
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
      </Col>
      </Row>
    </ListGroup.Item>*/


