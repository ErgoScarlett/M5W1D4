import React from'react';
import PropTypes  from 'prop-types';
import { useState, useEffect, useCallback } from 'react';
import SingleComment from './SingleComment';
import { Spinner } from 'react-bootstrap';

const API_URL = 'https://striveschool-api.herokuapp.com/api/books/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA1MjE2ODUsImV4cCI6MTcxMTczMTI4NX0.GLapbAFrvkI0jBlFvgEYp8Cc6kovnPJBpPECRvEDTCc';


const CommentList = ({bookasin, refresh, newRefresh}) => {

  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/${bookasin}/comments`, {
          headers: {
            Authorization: `Bearer ${TOKEN}`  
          }
        });
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError('Failed to fetch comments');
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, [refresh, bookasin]);

  if(loading) {
    return <Spinner animation="border"/>
  }

  if(error) {
    return <div>{error}</div>
  }

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <SingleComment 
          key={comment._id}
          comment={comment}
          newRefresh={newRefresh}
        />
      ))}
    </div>
  );
}

CommentList.propTypes = {
  bookasin: PropTypes.string.isRequired,
  refresh: PropTypes.bool,
  newRefresh: PropTypes.func
};

export default CommentList;


  /*useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookAsin}/comments/`);
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchComments();
  }, [bookId]);

  if(loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="comment-list">
      {comments.map(comment => (
        <SingleComment key={comment.id} {...comment}/>  
      ))}
    </div>
  );
}

export default CommentList;*/
