/**
 * Created by shigeru on 16/06/25.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

export class CommentList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('props', this.props);
    const commentNodes = this.props.data.map((comment)=> {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    // const commentNodes = (comment)=>
    //   (
    //     <Comment author={comment.author} key={comment.id}>
    //       {comment.text}
    //     </Comment>
    //   );
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}
CommentList.propTypes = { data: React.PropTypes.object.isRequired };
export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {author: '', text: ''};
  }
  handleAuthorChange(e) {
    this.setState({author: e.target.value});
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    const author = this.state.author.trim();
    const text = this.state.text.trim();
    if( !text || !author) { return; }

    // サーバーに送信
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name"
               value={this.state.author}
               onChange={this.handleAuthorChange.bind(this)}
        />
        <input type="text" placeholder="Say something..."
               value={this.state.text}
               onChange={this.handleTextChange.bind(this)}
        />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
  // loadCommentsFromserver() {
  //   fetch(this.props.url)
  //     .then((response)=>response.json())
  //     .then((json)=>{
  //       console.log('json', json);
  //       this.setState({data: json});
  //     }).catch((ex)=>{
  //     console.log('err', ex);
  //     });
  // }
  componentDidMount() {
    fetch(this.props.url)
      .then((response)=>response.json())
      .then((json)=>{
        console.log('json', json);
        this.setState({data: json});
      }).catch((ex)=>{
      console.log('err', ex);
    });
    // this.loadCommentsFromserver.bind(this);
    //setInterval(this.loadCommentsFromserver.bind(this), this.props.pollInterval);
  }
  handleCommentSubmit(comment) {
    console.log('handle comment submit', comment);
    fetch(this.props.url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(comment)
    })
      .then((response)=>response.json())
      .then((json)=>{
        console.log('json', json);
        this.setState({data: json});
      }).catch((ex)=>{
        console.log('err', ex);
    });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
      </div>
    );
  }
}
ReactDOM.render(
  <CommentBox url="http://localhost:3000/comments" pollInterval={2000} />,
  document.getElementById('root')
);
