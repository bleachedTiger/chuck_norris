export function viewedJokes(joke = {}) {
  console.log('viewed jokes action');
  return {
    type: 'VIEWED_JOKE',
    payload: joke
  };
}