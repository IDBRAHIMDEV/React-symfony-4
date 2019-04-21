import React, { Component } from 'react'

export default class PostCreate extends Component {
  render() {
    return (
      <div>
        <h1>Create new Post</h1>
        <hr/>
        
        <div className="row">
          <div className="col-md-8 mx-auto">
          <div className="form-group">
          <label htmlFor="title">title</label>
          <input name="title" id="title" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="slug">slug</label>
          <input name="slug" id="slug" type="text" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="content">content</label>
          <textarea rows="3" name="content" id="content" type="text" className="form-control"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="published">published</label>
          <input name="published" id="published" type="text" className="form-control"/>
        </div>

        <button className="btn btn-primary btn-block">Add new Post</button>
          </div>
        </div>

      </div>
    )
  }
}
