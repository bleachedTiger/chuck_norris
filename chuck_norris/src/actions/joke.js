export function selectedJoke(joke = {}) {
  return {
    type: 'SELECTED_JOKE',
    payload: joke
  };
}