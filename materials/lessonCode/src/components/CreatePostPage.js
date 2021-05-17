import React, { Component } from 'react';
import AddPost from './AddPost';
import TopPanel from './TopPanel';
import Post from './Post';

class CreatePostPage extends Component {

  state = {
    posts: []
  }

  addDataPosts = data => {
    this.setState({ posts: this.state.posts.concat(data) })
  }

  render() {

    // console.log(this.state.posts);

    return (
      <div>
        <TopPanel />
        <AddPost addDataPosts={this.addDataPosts} />
        <div className="post-block">
          {this.state.posts.map((post, i) => <Post post={post} key={i} />)}
        </div>
      </div>
    )
  }
}

export default CreatePostPage;