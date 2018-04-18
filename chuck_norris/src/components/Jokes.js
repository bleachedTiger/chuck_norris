import React from 'react';
import { Route } from 'react-router-dom';
import OneJoke from './OneJoke';

const Jokes = () => (
  <div>
    Jokes
    <Route path='/jokes/:id' component={OneJoke} />
  </div>
);

export default Jokes;