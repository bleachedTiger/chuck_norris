import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';
import Jokes from './components/Jokes';

class App extends Component {


  render() {
    return (
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/categories' component={Categories} />
        <Route path='/jokes' exact component={Jokes} />
      </div>
    );
  }
}

export default App;
