/**
 * Created by shigeru on 16/06/25.
 */
import React from 'react';
import 'whatwg-fetch';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
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
        const newComments = this.state.data.concat([json]);
        this.setState({data: newComments});
      }).catch((ex)=>{
        console.log('err', ex);
      });
  }

  render() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    );
  }
}
CommentBox.propTypes = { url: React.PropTypes.string.isRequired };
