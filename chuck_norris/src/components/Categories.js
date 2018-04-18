import React, { Component } from 'react';

import axios from 'axios';


class Categories extends Component {

  componentDidMount() {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(res => console.log('joke categories: ', res.data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        Categories
      </div>
    );
  }
}

export default Categories;