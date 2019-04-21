import React, { Component } from 'react';
import axios from 'axios';


export default class PostCreate extends Component {
  
  state = {
      title:'',
      slug: '',
      published: new Date(),
      content: ''
  }



  onChangeInput = (e) => this.setState({[e.target.name]: e.target.value})

  persistPost = () => {
    
    const JWTtoken = `Bearer ${localStorage.getItem('myToken')}`;
            axios.defaults.headers.common['Authorization'] = JWTtoken;

    axios.post('http://localhost:8000/api/posts', this.state)
         .then(res => {
        
           this.props.history.push('/posts')
          })
         .catch(err => console.log('error: ', err))
  }
  
  render() {

    const { title, slug, content, published } = this.state;
    return (
      <div>
         
        <h1>Create new Post</h1>
        <hr/>
        
        <div className="row">
          <div className="col-md-8 mx-auto">
          <div className="form-group">
          <label htmlFor="title">title</label>
          <input onChange={ this.onChangeInput } defaultValue={title} name="title" id="title" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="slug">slug</label>
          <input onChange={ this.onChangeInput } defaultValue={slug} name="slug" id="slug" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="content">content</label>
          <textarea onChange={ this.onChangeInput } defaultValue={content} rows="3" name="content" id="content" type="text" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="published">published</label>
          <input onChange={ this.onChangeInput } defaultValue={published} name="published" id="published" type="text" className="form-control"/>
        </div>

        <button onClick={this.persistPost} className="btn btn-primary btn-block">Add new Post</button>
          </div>
        </div>
       { this.state.title }
      </div>
    )
  }
}
