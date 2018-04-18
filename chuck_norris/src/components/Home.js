import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(res => console.log('Chuck Norris random joke -> ', res.data.value, res));
  }

  render () {
    return (
      <div>
        Home
      </div>
    )
  }
}

export default Home;