import { combineReducers } from 'redux';
import categories from './categories';
import joke from './joke';
import viewedJokes from './viewedJokes';

const rootReducer = combineReducers({
  categories,
  joke,
  viewedJokes
});

export default rootReducer;