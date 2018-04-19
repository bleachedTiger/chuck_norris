export function categoriesList(categories = []) {
  console.log('ACTION -> categories', categories);
  return {
    type: 'CATEGORIES_LIST',
    payload: categories
  };
}