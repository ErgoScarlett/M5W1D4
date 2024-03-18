import React from 'react';
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { IoMdStarOutline } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";


// api.js
export const API_URL = 'https://striveschool-api.herokuapp.com/api/comments/'; 
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA1MjE2ODUsImV4cCI6MTcxMTczMTI4NX0.GLapbAFrvkI0jBlFvgEYp8Cc6kovnPJBpPECRvEDTCc';

// SingleComment.jsx
 

function SingleComment({ comment, onDelete }) {

  const [loading, setLoading] = useState(false);

  const { _id, text, author, createdAt, rating } = comment;
  
  const handleDelete = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}${_id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }  
      });
      if(response.ok) {
        onDelete(comment); 
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="single-comment">
        {loading && <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>}     
        <button onClick={handleDelete}>
        <MdDeleteForever />
        Delete
      </button>

      <p>{text}</p>
      <p>By {author}</p>

      <p>Rating: {[...Array(rating)].map((_, i) => (<IoMdStarOutline key ={i} />))}</p>

      <p>On {createdAt}</p>

    </div>
  );
}

export default SingleComment;
