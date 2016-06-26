import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
  document.getElementById('root')
);
