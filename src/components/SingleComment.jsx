import React from 'react';
import { Button, ListGroup } from 'react-bootstrap'

export const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/'; 
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA3OTA3ODMsImV4cCI6MTcxMjAwMDM4M30.BSJ3pGD8tNy9o8s_cuUqma6Key7oL4WCRpe_2KrPKbI';


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

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ms-2"
        onClick={() => deleteComment(comment._id)}
      >
        Elimina
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment

