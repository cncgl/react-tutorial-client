import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {CommentBox} from './comment-list';

const data = [
  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
];

// export default class App extends Component {
//   render() {
//     return (
//       // Add your component markup and other subcomponent references here.
//       // <h1>Hello, World!</h1>
//       // <div className="commentBox">
//       //   <h1>Comments</h1>
//       //   <CommentList data={this.props.data} />
//       //   <CommentForm />
//       // </div>
//       <CommentBox data={data} url="http://localhost:3000/comments" pollInterval={2000} />
//     );
//   }
// }
ReactDOM.render(
  <CommentBox data={data} url="http://localhost:3000/comments" pollInterval={2000} />
);

