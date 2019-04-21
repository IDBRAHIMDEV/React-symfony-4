import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    state = {
        username:'',
        password: '',
    }
  
    onChangeInput = (e) => this.setState({[e.target.name]: e.target.value})
  
    login = () => {
        axios.post("http://localhost:8000/api/login_check", this.state)
             .then(res => {
                 localStorage.setItem('myToken', res.data.token);
             })
             .catch(err => console.log(err))
    }

  render() {
    return (
      <div>
        <div className="row mt-5">
            <div className="col-md-6 mx-auto">
               
               <h1>Login</h1>
              
               <div className="form-group">
                 <label htmlFor="inputEmail" className="sr-only">Email address</label>
                 <input onChange={ this.onChangeInput } name="username" type="text" id="inputEmail" className="form-control" placeholder="Email address" />
               </div>
               
               <div className="form-group">
                 <label htmlFor="inputPassword" className="sr-only">Password</label>
                 <input onChange={ this.onChangeInput } name="password" type="password" id="inputPassword" className="form-control" placeholder="Password" />
               </div>

                <button onClick={ this.login } className="btn btn-primary btn-block">Login</button>
            </div>
        </div>
      </div>
    )
  }
}
