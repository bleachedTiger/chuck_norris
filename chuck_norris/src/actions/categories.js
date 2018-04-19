export function categoriesList(categories = []) {
  console.log('categories action', categories);
  return {
    type: 'CATEGORIES_LIST',
    payload: categories
  };
}