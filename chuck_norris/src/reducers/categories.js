const initialstate = {joke: {}, categories: [], viewedJokes: []};

export default function(state = initialstate, action) {
  switch(action.type) {
    case 'CATEGORIES_LIST':
      return {...state, categories: [action.payload]};
    default: 
      return state;
  }
}