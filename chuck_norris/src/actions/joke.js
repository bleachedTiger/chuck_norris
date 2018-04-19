export function selectedJoke(joke = {}) {
  console.log('ACTION -> joke ', joke);
  return {
    type: 'SELECTED_JOKE',
    payload: joke
  };
}