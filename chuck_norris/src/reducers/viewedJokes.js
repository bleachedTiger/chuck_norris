const initialstate = {joke: {}, categories: [], viewedJokes: []};

export default function(state = initialstate, action) {
  switch(action.type) {
    case 'VIEWED_JOKE':
      return { ...state, viewedJokes: [...state.viewedJokes, action.payload] };
    default:
    return state;
  }
}