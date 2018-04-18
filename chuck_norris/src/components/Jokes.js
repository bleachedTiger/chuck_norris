import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { TextField, FloatingActionButton } from 'material-ui';
import OneJoke from './OneJoke';
import ContentSearch from 'material-ui/svg-icons/action/search';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = ({ query: '' });
    this.fetchJokes = this.fetchJokes.bind(this);
  }

  fetchJokes(query) {
    axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
      .then(res => {
        console.log('do something with jokes: ', res);
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <TextField
          id='query'
          hintText='Search Jokes'
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <FloatingActionButton onClick={() => this.fetchJokes(this.state.query)}>
          <ContentSearch />
        </FloatingActionButton>
        <Route path='/jokes/:id' component={OneJoke} />
      </div>
    );
  } 
}

export default Jokes;