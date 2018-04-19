export function viewedJokes(joke = {}) {
  return {
    type: 'VIEWED_JOKE',
    payload: joke
  };
}