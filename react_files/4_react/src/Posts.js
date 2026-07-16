import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  // Fetch data
  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const postList = data.map(
          p => new Post(p.id, p.title, p.body)
        );
        this.setState({ posts: postList });
      })
      .catch(error => {
        throw error;
      });
  }

  // Lifecycle method
  componentDidMount() {
    this.loadPosts();
  }

  // Error handling
  componentDidCatch(error) {
    alert("Error occurred: " + error);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>

        {this.state.posts.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;