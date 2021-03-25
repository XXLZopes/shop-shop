//import actions from utils/actions.js
import {
    UPDATE_PRODUCTS,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

import { reducer } from '../utils/reducers';

//create a sample of what our global state will look like
const initialState = {
    products: [],
    categories: [{ name: 'Food' }],
    currentCategory: '1',
};


//reducer excepts two parameters: 
        //current state object, so a copy of it can be made for the new state
        //action that is being performed to update state
test('UPDATE_PRODUCTS', () => {
    let newState = reducer(initialState, {
        //type of action being preformed
        type: UPDATE_PRODUCTS,
        //new data being used with the action
        products: [{}, {}]
    });
})

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });

    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });

    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
})