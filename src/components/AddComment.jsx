import React from 'react'
import {useEffect, useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { ThemeContext } from './ThemeContextProvider';


export const API_POST = 'https://striveschool-api.herokuapp.com/api/comments/:elementId'
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA3OTA3ODMsImV4cCI6MTcxMjAwMDM4M30.BSJ3pGD8tNy9o8s_cuUqma6Key7oL4WCRpe_2KrPKbI'


const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    })) 
  }, [asin])  

  const sendComment = async (e) => {
    e.preventDefault()
    console.log(JSON.stringify(comment))
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }
  const {theme} = useContext(ThemeContext);
  return (
    <div className="my-3"
    style={{color: theme === 'light'? '#333' : '#F8F9FA'}}>
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
