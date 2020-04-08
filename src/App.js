import React, { Component } from 'react';
import './App.css';
import BookShelf from './BookShelf';
import Search from './Search';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component = {BookShelf}/>
        <Route exact path='/search' component = {Search}/>
      </div>
    );
  }
}

export default App;
