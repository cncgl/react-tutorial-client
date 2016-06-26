import React from 'react';
import {render} from 'react-dom';
// import App from './App';
import CommentBox from './comment-list';

const data = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

// render(
//   <App />,
//   document.getElementById('root')
// );
render(
  <CommentBox data={data} url="http://localhost:3000/comments" pollInterval={2000} />,
  document.getElementById('root')
);

