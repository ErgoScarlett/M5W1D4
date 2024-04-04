import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import CommentArea from './CommentArea';

// CommentArea.test.js

jest.mock('./AddComment', () => () => {
  return <mock-addcomment data-testid="add-comment"/>;
});

jest.mock('./CommentList', () => () => {
  return <mock-commentlist data-testid="comment-list"/>;
});

test('Verifica che il componente CommentArea venga renderizzato correttamente', () => {

  render(<CommentArea />);
  
  const commentArea = screen.getByTestId('comment-area');
  expect(commentArea).toBeInTheDocument();

  const addComment = screen.getByTestId('add-comment');
  expect(addComment).toBeInTheDocument();

  const commentList = screen.getByTestId('comment-list');
  expect(commentList).toBeInTheDocument();

});





  