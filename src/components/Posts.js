import React, { Component } from 'react';
import { format } from 'timeago.js';
import axios from 'axios';

class Posts extends Component {

  state = {
    posts: []
  }

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      axios.get('http://localhost:8000/api/posts')
           .then(response => {
                this.setState({
                  posts: response.data['hydra:member']
                });
           })
           .catch(error => console.log('error:', error))
   }

  render() {
    return (
      <div>
        
        <h1>List of Posts</h1>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Content</th>
              <th>published</th>
            </tr>
          </thead>
          <tbody>
            { this.state.posts.map(post => (
             <tr key={post.id}>
              <td>{ post.title }</td>
              <td>{ post.author }</td>
              <td>{ post.content }</td>
              <td>{ format(post.published, 'my-locale') }</td>
            </tr>
            )) }
          </tbody>
        </table>

      </div>
    )
  }
}

export default Posts;
