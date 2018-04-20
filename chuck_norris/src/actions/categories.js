export function categoriesList(categories = []) {
  return {
    type: 'CATEGORIES_LIST',
    payload: categories
  };
}