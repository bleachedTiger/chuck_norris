export function selectedJoke(joke = {}) {
  console.log('** joke action', joke);
  return {
    type: 'SELECTED_JOKE',
    payload: joke
  };
}