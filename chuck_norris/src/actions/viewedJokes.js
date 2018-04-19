export function viewedJokes(joke = {}) {
  console.log('ACTION -> viewed jokes');
  return {
    type: 'VIEWED_JOKE',
    payload: joke
  };
}