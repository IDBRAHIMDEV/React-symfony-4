import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Posts from './components/Posts';
import Home from './components/Home';
import PostCreate from './components/PostCreate';
import Navbar from './components/Navbar';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <Router>
          <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/posts" component={Posts} />
               <Route exact path="/posts/create" component={PostCreate} />
               <Route exact component={PageNotFound} />
            </Switch>
        </Router> 
        </div>
       
        
      </div>
    );
  }
}

export default App;
