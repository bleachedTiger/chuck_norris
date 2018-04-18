import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Categories from './components/Categories';
import Jokes from './components/Jokes';

class App extends Component {
  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => console.log('Chuck Norris response -> ', res.value));
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => console.log('joke categories: ', res.data));
  }

  render() {
    return (
      <div>
        <Header />
        App
        <Route path='/categories' component={Categories} />
        <Route path='/jokes' component={Jokes} />
      </div>
    );
  }
}

export default App;
