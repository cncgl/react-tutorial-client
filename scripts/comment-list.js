/**
 * Created by shigeru on 16/06/25.
 */
import React, {Component} from 'react';

export default class CommentList extends Component {
  render() {
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
      </div>
    );
  }
}
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
    if(!text || !author) return;

    // サーバーに送信
    this.setState({author: '', text: ''});
  }
  render() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
        <form className="commentForm">
          <input type="text" placeholder="Your name"
                 value={this.state.author}
                 onChange={this.handleAuthorChange.bind(this)}
          />
          <input type="text" placeholder="Say something..."
                 value={this.state.text}
                 onChange={this.handleTextChange.bind(this)}
          />
          <input type="submit" value="Post"
                 onSubmit={this.handleSubmit.bind(this)}
          />
        </form>
      </div>
    );
  }
}
export class CommentBox extends Component {
  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}
