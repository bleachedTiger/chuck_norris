const initialstate = {joke: {}, categories: [], viewedJokes: []};

export default function(state = initialstate, action) {
  switch(action.type) {
    case 'SELECTED_JOKE':
      return { ...state, joke: action.payload };
    default:
    return state;
  }
}