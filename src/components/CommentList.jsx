import React from'react';
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) =>(
  
 <ListGroup style={{ color: 'black' }} className="mt-2">
    {commentsToShow.map((comment) => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </ListGroup>
  )


export default CommentList