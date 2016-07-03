import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './CommentBox';

ReactDOM.render(
  <CommentBox url="http://api.localhost.local:3000/v1/comments" pollInterval={2000} />,
  document.getElementById('root')
);
