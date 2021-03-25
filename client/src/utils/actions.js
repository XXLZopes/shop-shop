//These actions define how our state will be maintained and updated

//used by the ProductList component.
//Rn product data is from server and Apollo caches the results
//Goal is to store data retrieved for products in this global state to enable offline functionality later on
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

//Takes list of categories retrieved from the server by Apollo and store it in global state.
//Help easily add offline capabilities.
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

//Connecting piece of data for UPDATE_PRODUCTS & UPDATE_CATEGORIES
//We need to be able to select a category from the state created by UPDATE_CATEGORIES and display products for that category from the UPDATE_PRODUCTS
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";

