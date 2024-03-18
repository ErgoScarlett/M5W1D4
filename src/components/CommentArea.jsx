/*fetch("https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/", {
headers: {
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZTU3ODljNDM3MDAwMTkzYzM2ZDAiLCJpYXQiOjE3MTA1MjE2ODUsImV4cCI6MTcxMTczMTI4NX0.GLapbAFrvkI0jBlFvgEYp8Cc6kovnPJBpPECRvEDTCc"
}
})*/

import React from'react';
import { useState, useEffect } from 'react';
import CommentList from './CommentList'; 
import AddComment from './AddComment';
// CommentArea.js


function CommentArea({ bookASIN }) {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments= async () => {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookASIN}/comments/`);
        const data = await response.json();
        setComments(data);
  }
  fetchComments();
}, [bookASIN]);
  

  const addComment = (newcomment) => {
    setComments([...comments, newcomment]);
  }

  return (
    <div className="comment-area">
      <CommentList comments={comments} setComments={setComments} />
      <AddComment onAdd={addComment} />
    </div>
  );

}


export default CommentArea;