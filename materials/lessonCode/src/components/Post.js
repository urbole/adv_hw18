import React, { Component } from 'react';

class Post extends Component {

  state = {
    counter: 0,
    isActive: false
  }

  addLike = () => {
    
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div className="post">
        <h3>Name: {this.props.post.name}</h3>
        <p>выполнено заданий: {this.props.post.tasks}</p>
        <span onClick={this.addLike}>&#10084; {this.state.counter}</span>
      </div>
    )
  }
}

export default Post;