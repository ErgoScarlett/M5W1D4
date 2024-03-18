import React from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const API_POST = 'https://striveschool-api.herokuapp.com/api/comments/:elementId'
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA1MjE2ODUsImV4cCI6MTcxMTczMTI4NX0.GLapbAFrvkI0jBlFvgEYp8Cc6kovnPJBpPECRvEDTCc'

// AddComment.js

function AddComment({bookId, onAdd}) {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const comment = {
      text,
      rating,
      elementId: bookId
    };

    try {
        setLoading(true);

      const response = await fetch(API_POST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify(comment)  
      });

      setLoading(false);
      
      if(response.ok) {
        onAdd(comment);
        setText('');
        alert('Commento inviato con successo!');
      } else {
        throw new Error('Something went wrong!');
      }

    } catch (error) {
        setLoading(false);
        alert(error);
      console.log(error);
    }
  }

  return (
    <div className="add-comment">
        {loading && <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>}
      <form onSubmit={handleSubmit}>
        <input 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)} 
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>

        </select>

        <button type="submit">Invia</button>
      </form>
    </div>
  );

}

export default AddComment;
